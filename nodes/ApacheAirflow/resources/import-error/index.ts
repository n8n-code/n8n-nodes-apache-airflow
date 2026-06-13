import type { INodeProperties } from 'n8n-workflow';

export const importErrorDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Import Error"
					]
				}
			},
			"options": [
				{
					"name": "Get Import Errors",
					"value": "Get Import Errors",
					"action": "List import errors",
					"description": "List import errors",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/importErrors"
						}
					}
				},
				{
					"name": "Get Import Error",
					"value": "Get Import Error",
					"action": "Get an import error",
					"description": "Get an import error",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/importErrors/{{$parameter[\"import_error_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /importErrors",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import Error"
					],
					"operation": [
						"Get Import Errors"
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
						"Import Error"
					],
					"operation": [
						"Get Import Errors"
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
						"Import Error"
					],
					"operation": [
						"Get Import Errors"
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
						"Import Error"
					],
					"operation": [
						"Get Import Errors"
					]
				}
			}
		},
		{
			"displayName": "GET /importErrors/{import_error_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Import Error"
					],
					"operation": [
						"Get Import Error"
					]
				}
			}
		},
];
