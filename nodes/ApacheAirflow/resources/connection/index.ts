import type { INodeProperties } from 'n8n-workflow';

export const connectionDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					]
				}
			},
			"options": [
				{
					"name": "Get Connections",
					"value": "Get Connections",
					"action": "List connections",
					"description": "List connections",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections"
						}
					}
				},
				{
					"name": "Post Connection",
					"value": "Post Connection",
					"action": "Create a connection",
					"description": "Create a connection",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections"
						}
					}
				},
				{
					"name": "Test Connection",
					"value": "Test Connection",
					"action": "Test a connection",
					"description": "Test a connection.\n\n*New in version 2.2.0*\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/connections/test"
						}
					}
				},
				{
					"name": "Delete Connection",
					"value": "Delete Connection",
					"action": "Delete a connection",
					"description": "Delete a connection",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/connections/{{$parameter[\"connection_id\"]}}"
						}
					}
				},
				{
					"name": "Get Connection",
					"value": "Get Connection",
					"action": "Get a connection",
					"description": "Get a connection",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/connections/{{$parameter[\"connection_id\"]}}"
						}
					}
				},
				{
					"name": "Patch Connection",
					"value": "Patch Connection",
					"action": "Update a connection",
					"description": "Update a connection",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/connections/{{$parameter[\"connection_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Get Connections"
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
						"Connection"
					],
					"operation": [
						"Get Connections"
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
						"Connection"
					],
					"operation": [
						"Get Connections"
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
						"Connection"
					],
					"operation": [
						"Get Connections"
					]
				}
			}
		},
		{
			"displayName": "POST /connections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Post Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /connections<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Post Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/test",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Test Connection"
					]
				}
			}
		},
		{
			"displayName": "POST /connections/test<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Test Connection"
					]
				}
			}
		},
		{
			"displayName": "DELETE /connections/{connection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Delete Connection"
					]
				}
			}
		},
		{
			"displayName": "GET /connections/{connection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Get Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{connection_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Patch Connection"
					]
				}
			}
		},
		{
			"displayName": "Update Mask",
			"name": "update_mask",
			"description": "The fields to update on the resource. If absent or empty, all modifiable fields are updated.\nA comma-separated list of fully qualified names of fields.\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "update_mask",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Patch Connection"
					]
				}
			}
		},
		{
			"displayName": "PATCH /connections/{connection_id}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Connection"
					],
					"operation": [
						"Patch Connection"
					]
				}
			}
		},
];
