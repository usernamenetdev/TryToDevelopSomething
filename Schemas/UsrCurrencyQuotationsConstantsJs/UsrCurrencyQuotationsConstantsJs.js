define("UsrCurrencyQuotationsConstantsJs", [], function() {

	var courseTypeLookup = {
		// Значения справочника "Тип курса"
		cash: "539a6744-16c7-46a1-a0d9-03aff248190f",
		noncash: "997e44fc-4c69-4c5c-a9b2-117cf662a840",
		cb: "95798fc4-2828-4399-9fe3-ec739b111137"
	};

	return {
		CourseTypeLookup: { 
			Cash: courseTypeLookup.cash,
			Noncash: courseTypeLookup.noncash,
			CB: courseTypeLookup.cb 
		}
	};
});