import type { INodeProperties } from 'n8n-workflow';

export const poolDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools",
					"value": "Get Pools",
					"action": "List pools",
					"description": "List pools",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools"
						}
					}
				},
				{
					"name": "Post Pool",
					"value": "Post Pool",
					"action": "Create a pool",
					"description": "Create a pool",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/pools"
						}
					}
				},
				{
					"name": "Delete Pool",
					"value": "Delete Pool",
					"action": "Delete a pool",
					"description": "Delete a pool",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/pools/{{$parameter[\"pool_name\"]}}"
						}
					}
				},
				{
					"name": "Get Pool",
					"value": "Get Pool",
					"action": "Get a pool",
					"description": "Get a pool",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools/{{$parameter[\"pool_name\"]}}"
						}
					}
				},
				{
					"name": "Patch Pool",
					"value": "Patch Pool",
					"action": "Update a pool",
					"description": "Update a pool",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/pools/{{$parameter[\"pool_name\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Get Pools"
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
						"Pool"
					],
					"operation": [
						"Get Pools"
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
						"Pool"
					],
					"operation": [
						"Get Pools"
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
						"Pool"
					],
					"operation": [
						"Get Pools"
					]
				}
			}
		},
		{
			"displayName": "POST /pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "The description of the pool.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of pool.",
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
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Occupied Slots",
			"name": "occupied_slots",
			"type": "number",
			"default": 0,
			"description": "The number of slots used by running/queued tasks at the moment.",
			"routing": {
				"send": {
					"property": "occupied_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Open Slots",
			"name": "open_slots",
			"type": "number",
			"default": 0,
			"description": "The number of free slots at the moment.",
			"routing": {
				"send": {
					"property": "open_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Queued Slots",
			"name": "queued_slots",
			"type": "number",
			"default": 0,
			"description": "The number of slots used by queued tasks at the moment.",
			"routing": {
				"send": {
					"property": "queued_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Slots",
			"name": "slots",
			"type": "number",
			"default": 0,
			"description": "The maximum number of slots that can be assigned to tasks. One job may occupy one or more slots.\n",
			"routing": {
				"send": {
					"property": "slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "Used Slots",
			"name": "used_slots",
			"type": "number",
			"default": 0,
			"description": "The number of slots used by running tasks at the moment.",
			"routing": {
				"send": {
					"property": "used_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Post Pool"
					]
				}
			}
		},
		{
			"displayName": "DELETE /pools/{pool_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Delete Pool"
					]
				}
			}
		},
		{
			"displayName": "GET /pools/{pool_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Get Pool"
					]
				}
			}
		},
		{
			"displayName": "PATCH /pools/{pool_name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
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
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "The description of the pool.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"type": "string",
			"default": "",
			"description": "The name of pool.",
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
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Occupied Slots",
			"name": "occupied_slots",
			"type": "number",
			"default": 0,
			"description": "The number of slots used by running/queued tasks at the moment.",
			"routing": {
				"send": {
					"property": "occupied_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Open Slots",
			"name": "open_slots",
			"type": "number",
			"default": 0,
			"description": "The number of free slots at the moment.",
			"routing": {
				"send": {
					"property": "open_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Queued Slots",
			"name": "queued_slots",
			"type": "number",
			"default": 0,
			"description": "The number of slots used by queued tasks at the moment.",
			"routing": {
				"send": {
					"property": "queued_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Slots",
			"name": "slots",
			"type": "number",
			"default": 0,
			"description": "The maximum number of slots that can be assigned to tasks. One job may occupy one or more slots.\n",
			"routing": {
				"send": {
					"property": "slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
		{
			"displayName": "Used Slots",
			"name": "used_slots",
			"type": "number",
			"default": 0,
			"description": "The number of slots used by running tasks at the moment.",
			"routing": {
				"send": {
					"property": "used_slots",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Pool"
					],
					"operation": [
						"Patch Pool"
					]
				}
			}
		},
];
