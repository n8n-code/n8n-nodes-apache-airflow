import type { INodeProperties } from 'n8n-workflow';

export const userDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					]
				}
			},
			"options": [
				{
					"name": "Get Users",
					"value": "Get Users",
					"action": "List users",
					"description": "Get a list of users.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Post User",
					"value": "Post User",
					"action": "Create a user",
					"description": "Create a new user with unique username and email.\n\n*New in version 2.2.0*\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/users"
						}
					}
				},
				{
					"name": "Delete User",
					"value": "Delete User",
					"action": "Delete a user",
					"description": "Delete a user with a specific username.\n\n*New in version 2.2.0*\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/users/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Get User",
					"value": "Get User",
					"action": "Get a user",
					"description": "Get a user with a specific username.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/users/{{$parameter[\"username\"]}}"
						}
					}
				},
				{
					"name": "Patch User",
					"value": "Patch User",
					"action": "Update a user",
					"description": "Update fields for a user.\n\n*New in version 2.2.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/users/{{$parameter[\"username\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get Users"
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
						"User"
					],
					"operation": [
						"Get Users"
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
						"User"
					],
					"operation": [
						"Get Users"
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
						"User"
					],
					"operation": [
						"Get Users"
					]
				}
			}
		},
		{
			"displayName": "POST /users",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Post User"
					]
				}
			}
		},
		{
			"displayName": "DELETE /users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Delete User"
					]
				}
			}
		},
		{
			"displayName": "GET /users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Get User"
					]
				}
			}
		},
		{
			"displayName": "PATCH /users/{username}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User"
					],
					"operation": [
						"Patch User"
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
						"User"
					],
					"operation": [
						"Patch User"
					]
				}
			}
		},
];
