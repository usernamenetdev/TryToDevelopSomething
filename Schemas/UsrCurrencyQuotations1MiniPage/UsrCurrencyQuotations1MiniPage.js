define("UsrCurrencyQuotations1MiniPage", ["UsrCurrencyQuotationsConstantsJs"], function(UsrCurrencyQuotationsConstantsJs) {
	return {
		entitySchemaName: "UsrCurrencyQuotations",
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
			/* Переопределение справочного поля */
			"UsrCurrency": {
				"dataValueType": BPMSoft.DataValueType.LOOKUP,
				lookupListConfig: {
						"filters": [ 
							function () {
								var primaryCurrencyLookup = this.get("PrimaryCurrency");            
								var filterGroup = Ext.create("BPMSoft.FilterGroup");
								filterGroup.add("BaseCurrencyFilter", BPMSoft.createColumnFilterWithParameter(BPMSoft.ComparisonType.NOT_EQUAL,"Id", primaryCurrencyLookup));
								return filterGroup;
							}
						]
					},
			}
		},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"UsrCashSellCourse": {
				"1b646497-cd18-4c27-be93-1b764baf06c9": {
					"uId": "1b646497-cd18-4c27-be93-1b764baf06c9",
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
				"ba9ec2c8-b944-4c69-995b-5da3832a1c46": {
					"uId": "ba9ec2c8-b944-4c69-995b-5da3832a1c46",
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
								"value": "997e44fc-4c69-4c5c-a9b2-117cf662a840",
								"dataValueType": 10
							}
						},
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
				"ffd74a37-2f4c-4f10-8b12-6a028e18e6a9": {
					"uId": "ffd74a37-2f4c-4f10-8b12-6a028e18e6a9",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrCourse"
						}
					},
					"logical": 1,
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
						},
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
				},
				"68420351-4f4a-4fb2-b446-c1d30121f5aa": {
					"uId": "68420351-4f4a-4fb2-b446-c1d30121f5aa",
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
				"8ef3549e-ba35-4dfd-9f07-f819399ac890": {
					"uId": "8ef3549e-ba35-4dfd-9f07-f819399ac890",
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
				"9bd49cae-f9c0-4cab-8f34-56a99a4c84a9": {
					"uId": "9bd49cae-f9c0-4cab-8f34-56a99a4c84a9",
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
								"value": "997e44fc-4c69-4c5c-a9b2-117cf662a840",
								"dataValueType": 10
							}
						},
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
				"8b47f903-6294-489e-ba69-a465aec8aab6": {
					"uId": "8b47f903-6294-489e-ba69-a465aec8aab6",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrCourse"
						}
					},
					"logical": 1,
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
						},
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
				},
				"65842707-2bd1-45df-ad43-b71751369628": {
					"uId": "65842707-2bd1-45df-ad43-b71751369628",
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
			"UsrNoncashBuyCourse": {
				"a38e12a1-a17f-46e9-a6e6-32adc19b7e11": {
					"uId": "a38e12a1-a17f-46e9-a6e6-32adc19b7e11",
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
				"a8350662-c3ce-4b71-a8b0-6b5ef249dde9": {
					"uId": "a8350662-c3ce-4b71-a8b0-6b5ef249dde9",
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
								"value": "539a6744-16c7-46a1-a0d9-03aff248190f",
								"dataValueType": 10
							}
						}
					]
				},
				"5fa95bc5-d1c3-445a-be5d-05c4b8d67059": {
					"uId": "5fa95bc5-d1c3-445a-be5d-05c4b8d67059",
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
								"value": "539a6744-16c7-46a1-a0d9-03aff248190f",
								"dataValueType": 10
							}
						},
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
				"3269dbf7-afdb-4e85-aff8-058dcc3c6dba": {
					"uId": "3269dbf7-afdb-4e85-aff8-058dcc3c6dba",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrCourse"
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "539a6744-16c7-46a1-a0d9-03aff248190f",
								"dataValueType": 10
							}
						},
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
				},
				"54421a65-9db3-4df9-94f3-113b77c308ea": {
					"uId": "54421a65-9db3-4df9-94f3-113b77c308ea",
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
			"UsrNoncashSellCourse": {
				"31f3682d-c687-47f7-965e-756c5238fe26": {
					"uId": "31f3682d-c687-47f7-965e-756c5238fe26",
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
				"1c494804-6511-4daf-8c28-4f605131a0f5": {
					"uId": "1c494804-6511-4daf-8c28-4f605131a0f5",
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
								"value": "539a6744-16c7-46a1-a0d9-03aff248190f",
								"dataValueType": 10
							}
						}
					]
				},
				"1399298a-27bb-4feb-9b37-316be7b6a88b": {
					"uId": "1399298a-27bb-4feb-9b37-316be7b6a88b",
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
								"value": "539a6744-16c7-46a1-a0d9-03aff248190f",
								"dataValueType": 10
							}
						},
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
				"33c5204b-ce0f-4482-91ea-0128175696c2": {
					"uId": "33c5204b-ce0f-4482-91ea-0128175696c2",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "UsrCourse"
						}
					},
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "UsrCourseType"
							},
							"rightExpression": {
								"type": 0,
								"value": "539a6744-16c7-46a1-a0d9-03aff248190f",
								"dataValueType": 10
							}
						},
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
				},
				"b5284197-f828-4898-bd3c-7fbc012d2225": {
					"uId": "b5284197-f828-4898-bd3c-7fbc012d2225",
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
				this.addColumnValidator("UsrNoncashBuyCourse", this.noncashBuyCourseValidator);
				this.addColumnValidator("UsrNoncashSellCourse", this.noncashSellCourseValidator);
				this.addColumnValidator("UsrCashBuyCourse", this.cashBuyCourseValidator);
				this.addColumnValidator("UsrCashSellCourse", this.cashSellCourseValidator);
				this.callParent(arguments);
			},
			
			/* Методы-валидаторы */
			noncashBuyCourseValidator: function() {
				var invalidMessage = "";
				var courseType = this.get("UsrCourseType").value;
				var course = this.get("UsrCourse");
				var noncashBuyCourse = this.get("UsrNoncashBuyCourse");
				if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.Noncash) {
					if (noncashBuyCourse < (course - this.get("DeviationForNoncash")) || noncashBuyCourse > course) {
						invalidMessage = "Курс безналичной покупки должен быть в диапазоне от (Курс – ОБО) до Курс";
					}
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			noncashSellCourseValidator: function() {
				var invalidMessage = "";
				var courseType = this.get("UsrCourseType").value;
				var course = this.get("UsrCourse");
				var noncashSellCourse = this.get("UsrNoncashSellCourse");
				if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.Noncash) {
					if (noncashSellCourse < course || noncashSellCourse > (course + this.get("DeviationForNoncash"))) {
						invalidMessage = "Курс безналичной продажи должен быть в диапазоне от Курс до (Курс + ОБО)";
					}
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			cashBuyCourseValidator: function() {
				var invalidMessage = "";
				var courseType = this.get("UsrCourseType").value;
				var course = this.get("UsrCourse");
				var cashBuyCourse = this.get("UsrCashBuyCourse");
				if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.Cash) {
					if (cashBuyCourse < (course - this.get("DeviationForCash")) || cashBuyCourse > course) {
						invalidMessage = "Курс наличной покупки должен быть в диапазоне от (Курс - ОНО) до Курс";
					}
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			cashSellCourseValidator: function() {
				var invalidMessage = "";
				var courseType = this.get("UsrCourseType").value;
				var course = this.get("UsrCourse");
				var cashSellCourse = this.get("UsrCashSellCourse");
				if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.Cash) {
					if (cashSellCourse < course || cashSellCourse > (course + this.get("DeviationForCash"))) {
						invalidMessage = "Курс наличной продажи должен быть в диапазоне от Курс до (Курс + ОНО)";
					}
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
			
			/** 
			* Заполнение скрытых полей 
			*/
			fillHiddenFields: function() {
				var courseType = this.get("UsrCourseType").value;
				var course = this.get("UsrCourse");
				
				if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.Noncash) {
					this.set("UsrCashBuyCourse", course);
					this.set("UsrCashSellCourse", course);
				} else if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.Cash) {
					this.set("UsrNoncashBuyCourse", course);
					this.set("UsrNoncashSellCourse", course);
				} else if (courseType == UsrCurrencyQuotationsConstantsJs.CourseTypeLookup.CB) {
					this.set("UsrNoncashBuyCourse", course);
					this.set("UsrNoncashSellCourse", course);
					this.set("UsrCashBuyCourse", course);
					this.set("UsrCashSellCourse", course);
				}
			},
			
			/**
			*
			*/
			save: function() {
				this.fillHiddenFields();
				this.generateName();
				this.callParent(arguments);
			}
			
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
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
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrQuotationDate"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrCourseType",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCourseType"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrCurrency",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCurrency"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
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
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCourse"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrCashBuyCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCashBuyCourse"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrCashSellCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrCashSellCourse"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "UsrNoncashBuyCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrNoncashBuyCourse"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "UsrNoncashSellCourse",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "UsrNoncashSellCourse"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 8
			}
		]/**SCHEMA_DIFF*/
	};
});
