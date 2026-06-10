import type { INodeProperties } from 'n8n-workflow';

export const roleDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					]
				}
			},
			"options": [
				{
					"name": "Get Roles",
					"value": "Get Roles",
					"action": "List roles",
					"description": "Get a list of roles.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roles"
						}
					}
				},
				{
					"name": "Post Role",
					"value": "Post Role",
					"action": "Create a role",
					"description": "Create a new role.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/roles"
						}
					}
				},
				{
					"name": "Delete Role",
					"value": "Delete Role",
					"action": "Delete a role",
					"description": "Delete a role.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/roles/{{$parameter[\"role_name\"]}}"
						}
					}
				},
				{
					"name": "Get Role",
					"value": "Get Role",
					"action": "Get a role",
					"description": "Get a role.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/roles/{{$parameter[\"role_name\"]}}"
						}
					}
				},
				{
					"name": "Patch Role",
					"value": "Patch Role",
					"action": "Update a role",
					"description": "Update a role.\n\n*New in version 2.1.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/roles/{{$parameter[\"role_name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Get Roles"
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
						"Role"
					],
					"operation": [
						"Get Roles"
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
						"Role"
					],
					"operation": [
						"Get Roles"
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
						"Role"
					],
					"operation": [
						"Get Roles"
					]
				}
			}
		},
		{
			"displayName": "POST /roles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Post Role"
					]
				}
			}
		},
		{
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  {\n    \"action\": {},\n    \"resource\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Post Role"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the role\n\n*Changed in version 2.3.0*&#58; A minimum character length requirement ('minLength') is added.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Post Role"
					]
				}
			}
		},
		{
			"displayName": "DELETE /roles/{role_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Delete Role"
					]
				}
			}
		},
		{
			"displayName": "GET /roles/{role_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Get Role"
					]
				}
			}
		},
		{
			"displayName": "PATCH /roles/{role_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Patch Role"
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
						"Role"
					],
					"operation": [
						"Patch Role"
					]
				}
			}
		},
		{
			"displayName": "Actions",
			"name": "actions",
			"type": "json",
			"default": "[\n  {\n    \"action\": {},\n    \"resource\": {}\n  }\n]",
			"routing": {
				"send": {
					"property": "actions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Patch Role"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of the role\n\n*Changed in version 2.3.0*&#58; A minimum character length requirement ('minLength') is added.\n",
			"routing": {
				"send": {
					"property": "name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Role"
					],
					"operation": [
						"Patch Role"
					]
				}
			}
		},
];
