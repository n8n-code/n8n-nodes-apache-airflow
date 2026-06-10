import type { INodeProperties } from 'n8n-workflow';

export const monitoringDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring"
					]
				}
			},
			"options": [
				{
					"name": "Get Health",
					"value": "Get Health",
					"action": "Get instance status",
					"description": "Get the status of Airflow's metadatabase and scheduler. It includes info about\nmetadatabase and last heartbeat of scheduler.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/health"
						}
					}
				},
				{
					"name": "Get Version",
					"value": "Get Version",
					"action": "Get version information",
					"description": "Get version information",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/version"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /health",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring"
					],
					"operation": [
						"Get Health"
					]
				}
			}
		},
		{
			"displayName": "GET /version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring"
					],
					"operation": [
						"Get Version"
					]
				}
			}
		},
];
