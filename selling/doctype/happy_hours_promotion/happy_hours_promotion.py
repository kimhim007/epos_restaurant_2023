# Copyright (c) 2023, Tes Pheakdey and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document

class HappyHoursPromotion(Document):
	def validate(self):
		self.number_discount = self.percentage_discount / 100
