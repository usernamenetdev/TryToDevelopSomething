define("UsrCurrencyQuotationsSection", [], function() {
	return {
			entitySchemaName: "UsrCurrencyQuotations",
			details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
			diff: /**SCHEMA_DIFF*/[]/**SCHEMA_DIFF*/,
			methods: {
				initFixedFiltersConfig: function() {
				var fixedFilterConfig = {
			  	entitySchema: this.entitySchema,
			  	filters: [
				{
				  name: "PeriodFilter",
				  caption: this.get("Resources.Strings.123"), // создать строку
				  dataValueType: this.BPMSoft.DataValueType.DATE,
				  startDate: {
					columnName: "UsrQuotationDate",
					defValue: this.BPMSoft.startOfWeek(new Date())
				  },
				  dueDate: {
					columnName: "UsrQuotationDate",
					defValue: this.BPMSoft.endOfWeek(new Date())
					}
				},
				{
				  name:"CourseTypeFilter",
				  caption: this.get("Resources.Strings.UsrCourseTypeFilterCaption"),
				  dataValueType: this.BPMSoft.DataValueType.LOOKUP,
				  columnName:"UsrCourseType",
				  appendCurrentContactMenuItem: false,
				  filter: function(){
					return;
				  }
				}
			  ]
			};
			this.set("FixedFilterConfig", fixedFilterConfig);
		  }
		}
	};
});
