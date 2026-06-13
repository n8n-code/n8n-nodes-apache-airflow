import type { INodeProperties } from 'n8n-workflow';

export const dagWarningDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					]
				}
			},
			"options": [
				{
					"name": "Get Dag Warnings",
					"value": "Get Dag Warnings",
					"action": "List dag warnings",
					"description": "List dag warnings",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dagWarnings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dagWarnings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					],
					"operation": [
						"Get Dag Warnings"
					]
				}
			}
		},
		{
			"displayName": "Dag ID",
			"name": "dag_id",
			"description": "If set, only return DAG warnings with this dag_id.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dag_id",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					],
					"operation": [
						"Get Dag Warnings"
					]
				}
			}
		},
		{
			"displayName": "Warning Type",
			"name": "warning_type",
			"description": "If set, only return DAG warnings with this type.",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "warning_type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					],
					"operation": [
						"Get Dag Warnings"
					]
				}
			}
		},
		{
			"displayName": "Limit",
			"name": "limit",
			"description": "The numbers of items to return.",
			"default": 100,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "limit",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					],
					"operation": [
						"Get Dag Warnings"
					]
				}
			}
		},
		{
			"displayName": "Offset",
			"name": "offset",
			"description": "The number of items to skip before starting to collect the result set.",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "offset",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					],
					"operation": [
						"Get Dag Warnings"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "order_by",
			"description": "The name of the field to order the results by.\nPrefix a field name with `-` to reverse the sort order.\n\n*New in version 2.1.0*\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "order_by",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dag Warning"
					],
					"operation": [
						"Get Dag Warnings"
					]
				}
			}
		},
];
