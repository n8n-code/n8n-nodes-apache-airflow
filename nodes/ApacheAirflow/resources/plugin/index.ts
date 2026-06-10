import type { INodeProperties } from 'n8n-workflow';

export const pluginDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Plugin"
					]
				}
			},
			"options": [
				{
					"name": "Get Plugins",
					"value": "Get Plugins",
					"action": "Get a list of loaded plugins",
					"description": "Get a list of loaded plugins.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/plugins"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /plugins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Plugin"
					],
					"operation": [
						"Get Plugins"
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
						"Plugin"
					],
					"operation": [
						"Get Plugins"
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
						"Plugin"
					],
					"operation": [
						"Get Plugins"
					]
				}
			}
		},
];
