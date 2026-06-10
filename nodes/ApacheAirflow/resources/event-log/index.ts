import type { INodeProperties } from 'n8n-workflow';

export const eventLogDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Event Log"
					]
				}
			},
			"options": [
				{
					"name": "Get Event Logs",
					"value": "Get Event Logs",
					"action": "List log entries",
					"description": "List log entries from event log.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/eventLogs"
						}
					}
				},
				{
					"name": "Get Event Log",
					"value": "Get Event Log",
					"action": "Get a log entry",
					"description": "Get a log entry",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/eventLogs/{{$parameter[\"event_log_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /eventLogs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Event Log"
					],
					"operation": [
						"Get Event Logs"
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
						"Event Log"
					],
					"operation": [
						"Get Event Logs"
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
						"Event Log"
					],
					"operation": [
						"Get Event Logs"
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
						"Event Log"
					],
					"operation": [
						"Get Event Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /eventLogs/{event_log_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Event Log"
					],
					"operation": [
						"Get Event Log"
					]
				}
			}
		},
];
