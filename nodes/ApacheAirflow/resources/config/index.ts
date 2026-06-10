import type { INodeProperties } from 'n8n-workflow';

export const configDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					]
				}
			},
			"options": [
				{
					"name": "Get Config",
					"value": "Get Config",
					"action": "Get current configuration",
					"description": "Get current configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/config"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /config",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Config"
					],
					"operation": [
						"Get Config"
					]
				}
			}
		},
];
