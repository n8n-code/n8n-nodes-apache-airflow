import type { INodeProperties } from 'n8n-workflow';

export const taskInstanceDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					]
				}
			},
			"options": [
				{
					"name": "Get Task Instances",
					"value": "Get Task Instances",
					"action": "List task instances",
					"description": "This endpoint allows specifying `~` as the dag_id, dag_run_id to retrieve DAG runs for all DAGs and DAG runs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances"
						}
					}
				},
				{
					"name": "Get Task Instance",
					"value": "Get Task Instance",
					"action": "Get a task instance",
					"description": "Get a task instance",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}"
						}
					}
				},
				{
					"name": "Patch Task Instance",
					"value": "Patch Task Instance",
					"action": "Updates the state of a task instance",
					"description": "Updates the state for single task instance.\n*New in version 2.5.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}"
						}
					}
				},
				{
					"name": "Get Extra Links",
					"value": "Get Extra Links",
					"action": "List extra links",
					"description": "List extra links for task instance.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/links"
						}
					}
				},
				{
					"name": "Get Mapped Task Instances",
					"value": "Get Mapped Task Instances",
					"action": "List mapped task instances",
					"description": "Get details of all mapped task instances.\n\n*New in version 2.3.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/listMapped"
						}
					}
				},
				{
					"name": "Get Log",
					"value": "Get Log",
					"action": "Get logs",
					"description": "Get logs for a specific task instance and its try number.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/logs/{{$parameter[\"task_try_number\"]}}"
						}
					}
				},
				{
					"name": "Set Task Instance Note",
					"value": "Set Task Instance Note",
					"action": "Update the TaskInstance note.",
					"description": "Update the manual user note of a non-mapped Task Instance.\n\n*New in version 2.5.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/setNote"
						}
					}
				},
				{
					"name": "Get Mapped Task Instance",
					"value": "Get Mapped Task Instance",
					"action": "Get a mapped task instance",
					"description": "Get details of a mapped task instance.\n\n*New in version 2.3.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/{{$parameter[\"map_index\"]}}"
						}
					}
				},
				{
					"name": "Patch Mapped Task Instance",
					"value": "Patch Mapped Task Instance",
					"action": "Updates the state of a mapped task instance",
					"description": "Updates the state for single mapped task instance.\n*New in version 2.5.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/{{$parameter[\"map_index\"]}}"
						}
					}
				},
				{
					"name": "Set Mapped Task Instance Note",
					"value": "Set Mapped Task Instance Note",
					"action": "Update the TaskInstance note.",
					"description": "Update the manual user note of a mapped Task Instance.\n\n*New in version 2.5.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/{{$parameter[\"map_index\"]}}/setNote"
						}
					}
				},
				{
					"name": "Get Task Instances Batch",
					"value": "Get Task Instances Batch",
					"action": "List task instances (batch)",
					"description": "List task instances from all DAGs and DAG runs.\nThis endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limits.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dags/~/dagRuns/~/taskInstances/list"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances"
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
						"Task Instance"
					],
					"operation": [
						"Get Task Instances"
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
						"Task Instance"
					],
					"operation": [
						"Get Task Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Patch Task Instance"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "dry_run",
			"type": "boolean",
			"default": false,
			"description": "If set, don't actually run this operation. The response will contain the task instance\nplanned to be affected, but won't be modified in any way.\n",
			"routing": {
				"send": {
					"property": "dry_run",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Patch Task Instance"
					]
				}
			}
		},
		{
			"displayName": "New State",
			"name": "new_state",
			"type": "options",
			"default": "success",
			"description": "Expected new state.",
			"options": [
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Failed",
					"value": "failed"
				}
			],
			"routing": {
				"send": {
					"property": "new_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Patch Task Instance"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/links",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Extra Links"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/listMapped",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
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
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
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
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Execution Date Gte",
			"name": "execution_date_gte",
			"description": "Returns objects greater or equal to the specified date.\n\nThis can be combined with execution_date_lte parameter to receive only the selected period.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "execution_date_gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Execution Date Lte",
			"name": "execution_date_lte",
			"description": "Returns objects less than or equal to the specified date.\n\nThis can be combined with execution_date_gte parameter to receive only the selected period.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "execution_date_lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Start Date Gte",
			"name": "start_date_gte",
			"description": "Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date_gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Start Date Lte",
			"name": "start_date_lte",
			"description": "Returns objects less or equal the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "start_date_lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "End Date Gte",
			"name": "end_date_gte",
			"description": "Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date_gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "End Date Lte",
			"name": "end_date_lte",
			"description": "Returns objects less than or equal to the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "end_date_lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Duration Gte",
			"name": "duration_gte",
			"description": "Returns objects greater than or equal to the specified values.\n\nThis can be combined with duration_lte parameter to receive only the selected period.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration_gte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Duration Lte",
			"name": "duration_lte",
			"description": "Returns objects less than or equal to the specified values.\n\nThis can be combined with duration_gte parameter to receive only the selected range.\n",
			"default": 0,
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "duration_lte",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"description": "The value can be repeated to retrieve multiple matching values (OR condition).",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "state",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Pool",
			"name": "pool",
			"description": "The value can be repeated to retrieve multiple matching values (OR condition).",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "pool",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Queue",
			"name": "queue",
			"description": "The value can be repeated to retrieve multiple matching values (OR condition).",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "queue",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
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
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/logs/{task_try_number}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Log"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/setNote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Set Task Instance Note"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "The custom note to set for this Task Instance.",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Set Task Instance Note"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Mapped Task Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Patch Mapped Task Instance"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "dry_run",
			"type": "boolean",
			"default": false,
			"description": "If set, don't actually run this operation. The response will contain the task instance\nplanned to be affected, but won't be modified in any way.\n",
			"routing": {
				"send": {
					"property": "dry_run",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Patch Mapped Task Instance"
					]
				}
			}
		},
		{
			"displayName": "New State",
			"name": "new_state",
			"type": "options",
			"default": "success",
			"description": "Expected new state.",
			"options": [
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Failed",
					"value": "failed"
				}
			],
			"routing": {
				"send": {
					"property": "new_state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Patch Mapped Task Instance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/{map_index}/setNote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Set Mapped Task Instance Note"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "The custom note to set for this Task Instance.",
			"routing": {
				"send": {
					"property": "note",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Set Mapped Task Instance Note"
					]
				}
			}
		},
		{
			"displayName": "POST /dags/~/dagRuns/~/taskInstances/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Dag Ids",
			"name": "dag_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Return objects with specific DAG IDs.\nThe value can be repeated to retrieve multiple matching values (OR condition).",
			"routing": {
				"send": {
					"property": "dag_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Duration Gte",
			"name": "duration_gte",
			"type": "number",
			"default": 0,
			"description": "Returns objects greater than or equal to the specified values.\n\nThis can be combined with duration_lte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "duration_gte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Duration Lte",
			"name": "duration_lte",
			"type": "number",
			"default": 0,
			"description": "Returns objects less than or equal to the specified values.\n\nThis can be combined with duration_gte parameter to receive only the selected range.\n",
			"routing": {
				"send": {
					"property": "duration_lte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "End Date Gte",
			"name": "end_date_gte",
			"type": "string",
			"default": "",
			"description": "Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "end_date_gte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "End Date Lte",
			"name": "end_date_lte",
			"type": "string",
			"default": "",
			"description": "Returns objects less than or equal to the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "end_date_lte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Execution Date Gte",
			"name": "execution_date_gte",
			"type": "string",
			"default": "",
			"description": "Returns objects greater or equal to the specified date.\n\nThis can be combined with execution_date_lte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "execution_date_gte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Execution Date Lte",
			"name": "execution_date_lte",
			"type": "string",
			"default": "",
			"description": "Returns objects less than or equal to the specified date.\n\nThis can be combined with execution_date_gte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "execution_date_lte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Pool",
			"name": "pool",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The value can be repeated to retrieve multiple matching values (OR condition).",
			"routing": {
				"send": {
					"property": "pool",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Queue",
			"name": "queue",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The value can be repeated to retrieve multiple matching values (OR condition).",
			"routing": {
				"send": {
					"property": "queue",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Start Date Gte",
			"name": "start_date_gte",
			"type": "string",
			"default": "",
			"description": "Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "start_date_gte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "Start Date Lte",
			"name": "start_date_lte",
			"type": "string",
			"default": "",
			"description": "Returns objects less or equal the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period.\n",
			"routing": {
				"send": {
					"property": "start_date_lte",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "The value can be repeated to retrieve multiple matching values (OR condition).",
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Task Instance"
					],
					"operation": [
						"Get Task Instances Batch"
					]
				}
			}
		},
];
