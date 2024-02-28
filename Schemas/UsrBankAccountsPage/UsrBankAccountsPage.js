define("UsrBankAccountsPage", [], function() {
	return {
		entitySchemaName: "UsrBankAccounts",
		messages: {
			/*
			* @message BankAccountIsChangedMessage
			* Сообщает об изменении записи
			*/
			"BankAccountIsChangedMessage": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.PUBLISH
			}
		},
		attributes: {
			/* 
			* Вызов метода при изменении поля Статус счёта 
			*/
			"StatusChanged": {
				dependencies: [
					{
						columns: ["UsrAccountStatus"],
						methodName: "accountStatusChanged"
					}
				]
			},
			
			/* 
			* Добавление колонки справочника 
			*/
			"UsrAccountStatus": {
				lookupListConfig: {
					columns: ["UsrIsFinal"]
				}
			},
			
			/* 
			* Удаление Нашей компании из справочника 
			*/
			"UsrClient": {
				lookupListConfig: {
					columns: ["Type"],
					"filters": [
						function() {
							var filterGroup = Ext.create("BPMSoft.FilterGroup");
								filterGroup.add("OurCompanyFilter", BPMSoft.createColumnFilterWithParameter(BPMSoft.ComparisonType.NOT_EQUAL,"Type", "57412fad-53e6-df11-971b-001d60e938c6"));
							return filterGroup;
						}
					]
				}
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrBankAccountsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrBankAccounts"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrBalance": {
				"9aa46723-e0c8-4d81-ac26-05220e7eb2b0": {
					"uId": "9aa46723-e0c8-4d81-ac26-05220e7eb2b0",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAccountStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "4798e07f-91d5-42cf-8e04-c1a1b9cf10be",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrCurrency": {
				"03238c89-743a-44fd-b557-9e9ad90c432f": {
					"uId": "03238c89-743a-44fd-b557-9e9ad90c432f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAccountStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "4798e07f-91d5-42cf-8e04-c1a1b9cf10be",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrName": {
				"51938f08-5967-4cc1-a8a7-a18e7463a552": {
					"uId": "51938f08-5967-4cc1-a8a7-a18e7463a552",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAccountStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "4798e07f-91d5-42cf-8e04-c1a1b9cf10be",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrCloseDate": {
				"21c521af-53ea-4786-b372-0f1ff93be4b7": {
					"uId": "21c521af-53ea-4786-b372-0f1ff93be4b7",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAccountStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "68db5d6a-8cb9-4f5c-af40-52748f9c1558",
								"dataValueType": 10
							}
						}
					]
				},
				"c2e98143-17aa-41b9-a421-8e30ed1ab7dd": {
					"uId": "c2e98143-17aa-41b9-a421-8e30ed1ab7dd",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCloseDate"
							},
							"rightExpression": {
								"type": 1,
								"attribute": "DefaultValues"
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrAccountStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "68db5d6a-8cb9-4f5c-af40-52748f9c1558",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {

			onSaved: function() {
				this.processMessages();
				this.callParent(arguments);
			},
			
			/*
			* Публикация сообщений
			*/
			processMessages: function() {
				var client = this.get("UsrClient").value;
				this.sandbox.publish("BankAccountIsChangedMessage", {clientId: client}, ["BankAccountsIsChangedResult"]);
			},
			
			/* 
			* Очистка/заполнение даты закрытия в зависимости от значения Состояния счёта 
			*/
			accountStatusChanged: function() {
				var acc = this.get("UsrAccountStatus");
				var isFinal = acc ? acc.UsrIsFinal : null;
				
				if (isFinal && !this.get("UsrCloseDate")) {
					this.set("UsrCloseDate", this.getSysDefaultValue(BPMSoft.SystemValueType.CURRENT_DATE_TIME));
				} else if (!isFinal && this.get("UsrCloseDate")) {
					this.set("UsrCloseDate", null);
				}
			},
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "LOOKUP538504ae-5683-4bb9-b884-f2a4f63b6ac4",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrClient",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName3dcc9291-fad9-4f6b-9a24-01787412ed76",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "LOOKUPda59fe42-b970-4899-9024-d23c29198d5f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCurrency",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DATETIMEc01a0075-b7a9-4d36-902b-583aa2febbf8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrOpenDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DATETIMEea85cacb-6224-4cba-aab7-009f8fd92113",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCloseDate",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FLOAT57613ec4-715f-4a31-baed-0fb23afbe6dc",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrBalance",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUP2da0233a-24b8-4c98-9159-20c790648f4d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrAccountStatus",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 1
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
