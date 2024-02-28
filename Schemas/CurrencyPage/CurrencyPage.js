define("CurrencyPage", [], function() {
	return {
		entitySchemaName: "Currency",
		messages: {
			/*
			* @message CurrencyQuotationsUpdateMessage
			* Получает сообщение об изменении записи в Котировках валют
			*/
			"CurrencyQuotationsUpdateMessage": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.SUBSCRIBE,
			}
		},
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			
			"UsrCurrencyQuotationsDetail": {
				"schemaName": "UsrCurrencyQuotationsDetail",
				"entitySchemaName": "UsrCurrencyQuotations",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrCurrency"
				}
			}
			
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.sandbox.subscribe("CurrencyQuotationsUpdateMessage", this.onMessageSubscribe, this, ["CurrencyQuotationsUpdateResult"]);
			},
			
			onMessageSubscribe: function() {
				this.updateDetail({detail: "UsrCurrencyQuotationsDetail", reloadAll: true});
			}
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
					"operation": "insert",
					"parentName": "GeneralInfoTab",
					"propertyName": "items",
					"name": "UsrCurrencyQuotationsDetail",
					"values": {"itemType": BPMSoft.ViewItemType.DETAIL}
				}
		]/**SCHEMA_DIFF*/
	};
});
