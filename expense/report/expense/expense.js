// Copyright (c) 2022, Tes Pheakdey and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["Expense"] = {
	"filters": [
		{
			"fieldname":"start_date",
			"label": __("Start Date"),
			"fieldtype": "Date",
			default:frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			"fieldname":"end_date",
			"label": __("End Date"),
			"fieldtype": "Date",
			default:frappe.datetime.get_today(),
			"reqd": 1
		},
		{
			fieldname: "business_branch",
			label: __("Business Branch"),
			fieldtype: "MultiSelectList",
			get_data: function(txt) {
				return frappe.db.get_link_options('Business Branch', txt);
			}
			 
		},
		{
			"fieldname": "expense_by",
			"label": __("Expense By"),
			"fieldtype": "MultiSelectList",
			get_data: function(txt) {
				
				return frappe.db.get_link_options('Employee', txt);
			}
		},
		{
			"fieldname":"vendor_code",
			"label": __("Vendor Name"),
			"fieldtype":"Link",
			"options":"Vendor"
		}
	],
	"formatter": function(value, row, column, data, default_formatter) {

		value = default_formatter(value, row, column, data);

		if (data && data.is_group==1) {
			value = $(`<span>${value}</span>`);
			var $value = $(value).css("font-weight", "bold");
			value = $value.wrap("<p></p>").parent().html();
		}
		return value;
	},
};
