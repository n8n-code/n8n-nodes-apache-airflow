import type { INodeProperties } from 'n8n-workflow';

export const permissionDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Permission"
					]
				}
			},
			"options": [
				{
					"name": "Get Permissions",
					"value": "Get Permissions",
					"action": "List permissions",
					"description": "Get a list of permissions.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/permissions"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /permissions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Permission"
					],
					"operation": [
						"Get Permissions"
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
						"Permission"
					],
					"operation": [
						"Get Permissions"
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
						"Permission"
					],
					"operation": [
						"Get Permissions"
					]
				}
			}
		},
];
