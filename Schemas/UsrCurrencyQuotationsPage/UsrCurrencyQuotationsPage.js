define("UsrCurrencyQuotationsPage", [], function() {
	return {
		entitySchemaName: "UsrCurrencyQuotations",
		messages: {
			/*
			* @message CurrencyQuotationsUpdateMessage
			* Сообщает об изменении записи в Котировках валют
			*/
			"CurrencyQuotationsUpdateMessage": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.PUBLISH,
			}
		},
		attributes: {
			/* Аргумент для сохранения ОНО */
			"DeviationForCash": {
				"dataValueType": BPMSoft.DataValueType.MONEY,
				"type": BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/* Аргумент для сохранения ОБО */
			"DeviationForNoncash": {
				"dataValueType": BPMSoft.DataValueType.MONEY,
				"type": BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			/* Аргумент для сохранения базовой валюты */
			"PrimaryCurrency": {
				"dataValueType": BPMSoft.DataValueType.LOOKUP,
				"type": BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN
			},
			
			"UsrCurrency": {
				"dataValueType": BPMSoft.DataValueType.LOOKUP,
				lookupListConfig: {
						"filters": [ 
							function () {
								var primaryCurrencyLookup = this.get("PrimaryCurrency");            
								var filterGroup = Ext.create("BPMSoft.FilterGroup");
								filterGroup.add("CV", BPMSoft.createColumnFilterWithParameter(BPMSoft.ComparisonType.NOT_EQUAL,"Id", primaryCurrencyLookup));
								return filterGroup;
							}
						]
					},
			}
			
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrCurrencyQuotationsFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrCurrencyQuotations"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrName": {
				"dec21292-b134-49c6-aaf7-e13776d78332": {
					"uId": "dec21292-b134-49c6-aaf7-e13776d78332",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "997e44fc-4c69-4c5c-a9b2-117cf662a840",
								"dataValueType": 10
							}
						}
					]
				},
				"bad1eb9a-b177-419e-bb05-1de36a248ff3": {
					"uId": "bad1eb9a-b177-419e-bb05-1de36a248ff3",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "997e44fc-4c69-4c5c-a9b2-117cf662a840",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrCashSellCourse": {
				"cabd02a4-abc9-4c2e-ae5b-447bdcfd3dde": {
					"uId": "cabd02a4-abc9-4c2e-ae5b-447bdcfd3dde",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "95798fc4-2828-4399-9fe3-ec739b111137",
								"dataValueType": 10
							}
						}
					]
				},
				"2aad51bc-0af6-4fe5-8739-62b896285932": {
					"uId": "2aad51bc-0af6-4fe5-8739-62b896285932",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "95798fc4-2828-4399-9fe3-ec739b111137",
								"dataValueType": 10
							}
						}
					]
				},
				"997c7b32-0fd9-455b-96ec-079a07fbd15e": {
					"uId": "997c7b32-0fd9-455b-96ec-079a07fbd15e",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "95798fc4-2828-4399-9fe3-ec739b111137",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrCashBuyCourse": {
				"d43016ca-e82a-46cf-a2e0-e842594b8b61": {
					"uId": "d43016ca-e82a-46cf-a2e0-e842594b8b61",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 4,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "95798fc4-2828-4399-9fe3-ec739b111137",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"UsrNoncashSellCourse": {
				"f20a56f0-4879-4530-9f46-6a4fe06f30e7": {
					"uId": "f20a56f0-4879-4530-9f46-6a4fe06f30e7",
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
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "95798fc4-2828-4399-9fe3-ec739b111137",
								"dataValueType": 10
							}
						}
					]
				},
				"f67d1084-2e35-48e2-97a6-d3f567f9dcc8": {
					"uId": "f67d1084-2e35-48e2-97a6-d3f567f9dcc8",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrNoncashBuyCourse"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "95798fc4-2828-4399-9fe3-ec739b111137",
								"dataValueType": 10
							}
						}
					]
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			
			/* Действия при инициализации */
			onEntityInitialized: function() {
				this.callParent(arguments);
				this.setSysSetting("DeviationForCash");
				this.setSysSetting("DeviationForNoncash");
				this.setSysSetting("PrimaryCurrency");
			},
			
			/* Получает и записывает системную настройку в одноименный аргумент */
			setSysSetting: function(settingName) {
				this.BPMSoft.SysSettings.querySysSettingsItem(settingName, function(value) {
                    if (value === null || value === undefined) {
						console.error("Unable to get SysSetting: " + settingName + " undefined or null");
						return;
					} else {
						this.set(settingName, value);
					}
                }, this);
			},
			
			/* Добавление валидации к полям */
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("UsrNoncashBuyCourse", this.noncashBuyCourseValidator);
				this.addColumnValidator("UsrNoncashSellCourse", this.noncashSellCourseValidator);
				this.addColumnValidator("UsrCashBuyCourse", this.cashBuyCourseValidator);
				this.addColumnValidator("UsrCashSellCourse", this.cashSellCourseValidator);
			},
			
			/* Методы-валидаторы */
			noncashBuyCourseValidator: function() {
				var invalidMessage = "";
				var course = this.get("UsrCourse");
				var noncashBuyCourse = this.get("UsrNoncashBuyCourse");
				if (noncashBuyCourse < (course - this.get("DeviationForNoncash")) || noncashBuyCourse > course) {
					invalidMessage = "Курс безналичной покупки должен быть в диапазоне от (Курс – ОБО) до Курс";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			noncashSellCourseValidator: function() {
				var invalidMessage = "";
				var course = this.get("UsrCourse");
				var noncashSellCourse = this.get("UsrNoncashSellCourse");
				if (noncashSellCourse < course || noncashSellCourse > (course + this.get("DeviationForNoncash"))) {
					invalidMessage = "Курс безналичной продажи должен быть в диапазоне от Курс до (Курс + ОБО)";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			cashBuyCourseValidator: function() {
				var invalidMessage = "";
				var course = this.get("UsrCourse");
				var cashBuyCourse = this.get("UsrCashBuyCourse");
				if (cashBuyCourse < (course - this.get("DeviationForCash")) || cashBuyCourse > course) {
					invalidMessage = "Курс наличной покупки должен быть в диапазоне от (Курс - ОНО) до Курс";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			cashSellCourseValidator: function() {
				var invalidMessage = "";
				var course = this.get("UsrCourse");
				var cashSellCourse = this.get("UsrCashSellCourse");
				if (cashSellCourse < course || cashSellCourse > (course + this.get("DeviationForCash"))) {
					invalidMessage = "Курс наличной продажи должен быть в диапазоне от Курс до (Курс + ОНО)";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			/* Генерация имени 
			Прим: Нужно дополнительно выполнить проверку на заполненность полей */
			generateName: function() {
					var date = this.get("UsrQuotationDate");
					var fullDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
					var currency = this.get("UsrCurrency").displayValue;
					var ct = this.get("UsrCourseType").displayValue;
					var name = fullDate + " " + currency + " Тип курса " + ct;
					this.set("UsrName", name);
			},
			
			save: function() {
				this.generateName();
				this.callParent(arguments);
			},
			
			/*
			* Публикация сообщений
			*/
			processMessages: function() {
				this.sandbox.publish("CurrencyQuotationsUpdateMessage", null, ["CurrencyQuotationsUpdateResult"]);
			},
			
			onSaved: function() {
				this.processMessages();
				this.callParent(arguments);
			}

		
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "UsrCourseType",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCourseType",
					"enabled": true,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCurrency",
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrQuotationDate",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrQuotationDate"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCourse"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrNoncashBuyCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrNoncashBuyCourse",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrNoncashSellCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrNoncashSellCourse"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrCashBuyCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCashBuyCourse"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrCashSellCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "UsrCashSellCourse"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
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
