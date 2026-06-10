import type { INodeProperties } from 'n8n-workflow';

export const providerDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					]
				}
			},
			"options": [
				{
					"name": "Get Providers",
					"value": "Get Providers",
					"action": "List providers",
					"description": "Get a list of providers.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/providers"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Provider"
					],
					"operation": [
						"Get Providers"
					]
				}
			}
		},
];
