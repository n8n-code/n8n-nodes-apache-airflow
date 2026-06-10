import type { INodeProperties } from 'n8n-workflow';

export const variableDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					]
				}
			},
			"options": [
				{
					"name": "Get Variables",
					"value": "Get Variables",
					"action": "List variables",
					"description": "The collection does not contain data. To get data, you must get a single entity.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/variables"
						}
					}
				},
				{
					"name": "Post Variables",
					"value": "Post Variables",
					"action": "Create a variable",
					"description": "Create a variable",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/variables"
						}
					}
				},
				{
					"name": "Delete Variable",
					"value": "Delete Variable",
					"action": "Delete a variable",
					"description": "Delete a variable",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/variables/{{$parameter[\"variable_key\"]}}"
						}
					}
				},
				{
					"name": "Get Variable",
					"value": "Get Variable",
					"action": "Get a variable",
					"description": "Get a variable by key.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/variables/{{$parameter[\"variable_key\"]}}"
						}
					}
				},
				{
					"name": "Patch Variable",
					"value": "Patch Variable",
					"action": "Update a variable",
					"description": "Update a variable by key.",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/variables/{{$parameter[\"variable_key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /variables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Get Variables"
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
						"Variable"
					],
					"operation": [
						"Get Variables"
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
						"Variable"
					],
					"operation": [
						"Get Variables"
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
						"Variable"
					],
					"operation": [
						"Get Variables"
					]
				}
			}
		},
		{
			"displayName": "POST /variables",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Post Variables"
					]
				}
			}
		},
		{
			"displayName": "POST /variables<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Post Variables"
					]
				}
			}
		},
		{
			"displayName": "DELETE /variables/{variable_key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Delete Variable"
					]
				}
			}
		},
		{
			"displayName": "GET /variables/{variable_key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Get Variable"
					]
				}
			}
		},
		{
			"displayName": "PATCH /variables/{variable_key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Patch Variable"
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
						"Variable"
					],
					"operation": [
						"Patch Variable"
					]
				}
			}
		},
		{
			"displayName": "PATCH /variables/{variable_key}<br/><br/>There's no body available for request, kindly use HTTP Request node to send body",
			"name": "operation",
			"type": "notice",
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Variable"
					],
					"operation": [
						"Patch Variable"
					]
				}
			}
		},
];
