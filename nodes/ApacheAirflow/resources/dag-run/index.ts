import type { INodeProperties } from 'n8n-workflow';

export const dagRunDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					]
				}
			},
			"options": [
				{
					"name": "Get Dag Runs",
					"value": "Get Dag Runs",
					"action": "List DAG runs",
					"description": "This endpoint allows specifying `~` as the dag_id to retrieve DAG runs for all DAGs.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns"
						}
					}
				},
				{
					"name": "Post Dag Run",
					"value": "Post Dag Run",
					"action": "Trigger a new DAG run",
					"description": "Trigger a new DAG run",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns"
						}
					}
				},
				{
					"name": "Delete Dag Run",
					"value": "Delete Dag Run",
					"action": "Delete a DAG run",
					"description": "Delete a DAG run",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}"
						}
					}
				},
				{
					"name": "Get Dag Run",
					"value": "Get Dag Run",
					"action": "Get a DAG run",
					"description": "Get a DAG run",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}"
						}
					}
				},
				{
					"name": "Update Dag Run State",
					"value": "Update Dag Run State",
					"action": "Modify a DAG run",
					"description": "Modify a DAG run.\n\n*New in version 2.2.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}"
						}
					}
				},
				{
					"name": "Clear Dag Run",
					"value": "Clear Dag Run",
					"action": "Clear a DAG run",
					"description": "Clear a DAG run.\n\n*New in version 2.4.0*\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/clear"
						}
					}
				},
				{
					"name": "Set Dag Run Note",
					"value": "Set Dag Run Note",
					"action": "Update the DagRun note.",
					"description": "Update the manual user note of a DagRun.\n\n*New in version 2.5.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/setNote"
						}
					}
				},
				{
					"name": "Get Upstream Dataset Events",
					"value": "Get Upstream Dataset Events",
					"action": "Get dataset events for a DAG run",
					"description": "Get datasets for a dag run.\n\n*New in version 2.4.0*\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/upstreamDatasetEvents"
						}
					}
				},
				{
					"name": "Get Dag Runs Batch",
					"value": "Get Dag Runs Batch",
					"action": "List DAG runs (batch)",
					"description": "This endpoint is a POST to allow filtering across a large number of DAG IDs, where as a GET it would run in to maximum HTTP request URL length limit.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dags/~/dagRuns/list"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs"
					]
				}
			}
		},
		{
			"displayName": "POST /dags/{dag_id}/dagRuns",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Conf",
			"name": "conf",
			"type": "json",
			"default": "{}",
			"description": "JSON object describing additional configuration parameters.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n",
			"routing": {
				"send": {
					"property": "conf",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Dag ID",
			"name": "dag_id",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "dag_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Dag Run ID",
			"name": "dag_run_id",
			"type": "string",
			"default": "",
			"description": "Run ID.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n\nIf not provided, a value will be generated based on execution_date.\n\nIf the specified dag_run_id is in use, the creation request fails with an ALREADY_EXISTS error.\n\nThis together with DAG_ID are a unique key.\n",
			"routing": {
				"send": {
					"property": "dag_run_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Data Interval End",
			"name": "data_interval_end",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_interval_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Data Interval Start",
			"name": "data_interval_start",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "data_interval_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "end_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Execution Date",
			"name": "execution_date",
			"type": "string",
			"default": "",
			"description": "The execution date. This is the same as logical_date, kept for backwards compatibility.\nIf both this field and logical_date are provided but with different values, the request\nwill fail with an BAD_REQUEST error.\n\n*Changed in version 2.2.0*&#58; Field becomes nullable.\n\n*Deprecated since version 2.2.0*&#58; Use 'logical_date' instead.\n",
			"routing": {
				"send": {
					"property": "execution_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "External Trigger",
			"name": "external_trigger",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "external_trigger",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Last Scheduling Decision",
			"name": "last_scheduling_decision",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "last_scheduling_decision",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Logical Date",
			"name": "logical_date",
			"type": "string",
			"default": "",
			"description": "The logical date (previously called execution date). This is the time or interval covered by\nthis DAG run, according to the DAG definition.\n\nThe value of this field can be set only when creating the object. If you try to modify the\nfield of an existing object, the request fails with an BAD_REQUEST error.\n\nThis together with DAG_ID are a unique key.\n\n*New in version 2.2.0*\n",
			"routing": {
				"send": {
					"property": "logical_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Contains manually entered notes by the user about the DagRun.\n\n*New in version 2.5.0*\n",
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
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Run Type",
			"name": "run_type",
			"type": "options",
			"default": "backfill",
			"options": [
				{
					"name": "Backfill",
					"value": "backfill"
				},
				{
					"name": "Manual",
					"value": "manual"
				},
				{
					"name": "Scheduled",
					"value": "scheduled"
				},
				{
					"name": "Dataset Triggered",
					"value": "dataset_triggered"
				}
			],
			"routing": {
				"send": {
					"property": "run_type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"type": "string",
			"default": "",
			"description": "The start time. The time when DAG run was actually created.\n\n*Changed in version 2.1.3*&#58; Field becomes nullable.\n",
			"routing": {
				"send": {
					"property": "start_date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "queued",
			"description": "DAG State.\n\n*Changed in version 2.1.3*&#58; 'queued' is added as a possible value.\n",
			"options": [
				{
					"name": "Queued",
					"value": "queued"
				},
				{
					"name": "Running",
					"value": "running"
				},
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
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Post Dag Run"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dags/{dag_id}/dagRuns/{dag_run_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Delete Dag Run"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Run"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}/dagRuns/{dag_run_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Update Dag Run State"
					]
				}
			}
		},
		{
			"displayName": "State",
			"name": "state",
			"type": "options",
			"default": "success",
			"description": "The state to set this DagRun",
			"options": [
				{
					"name": "Success",
					"value": "success"
				},
				{
					"name": "Failed",
					"value": "failed"
				},
				{
					"name": "Queued",
					"value": "queued"
				}
			],
			"routing": {
				"send": {
					"property": "state",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Update Dag Run State"
					]
				}
			}
		},
		{
			"displayName": "POST /dags/{dag_id}/dagRuns/{dag_run_id}/clear",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Clear Dag Run"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "dry_run",
			"type": "boolean",
			"default": true,
			"description": "If set, don't actually run this operation. The response will contain a list of task instances\nplanned to be cleaned, but not modified in any way.\n",
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
						"DAG Run"
					],
					"operation": [
						"Clear Dag Run"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}/dagRuns/{dag_run_id}/setNote",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Set Dag Run Note"
					]
				}
			}
		},
		{
			"displayName": "Note",
			"name": "note",
			"type": "string",
			"default": "",
			"description": "Custom notes left by users for this Dag Run.",
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
						"DAG Run"
					],
					"operation": [
						"Set Dag Run Note"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/upstreamDatasetEvents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Upstream Dataset Events"
					]
				}
			}
		},
		{
			"displayName": "POST /dags/~/dagRuns/list",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "End Date Gte",
			"name": "end_date_gte",
			"type": "string",
			"default": "",
			"description": "Returns objects greater or equal the specified date.\n\nThis can be combined with end_date_lte parameter to receive only the selected period.\n",
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "End Date Lte",
			"name": "end_date_lte",
			"type": "string",
			"default": "",
			"description": "Returns objects less than or equal to the specified date.\n\nThis can be combined with end_date_gte parameter to receive only the selected period.\n",
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Execution Date Gte",
			"name": "execution_date_gte",
			"type": "string",
			"default": "",
			"description": "Returns objects greater or equal to the specified date.\n\nThis can be combined with execution_date_lte key to receive only the selected period.\n",
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Execution Date Lte",
			"name": "execution_date_lte",
			"type": "string",
			"default": "",
			"description": "Returns objects less than or equal to the specified date.\n\nThis can be combined with execution_date_gte key to receive only the selected period.\n",
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Order By",
			"name": "order_by",
			"type": "string",
			"default": "",
			"description": "The name of the field to order the results by. Prefix a field name\nwith `-` to reverse the sort order.\n\n*New in version 2.1.0*\n",
			"routing": {
				"send": {
					"property": "order_by",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Page Limit",
			"name": "page_limit",
			"type": "number",
			"default": 100,
			"description": "The numbers of items to return.",
			"routing": {
				"send": {
					"property": "page_limit",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Page Offset",
			"name": "page_offset",
			"type": "number",
			"default": 0,
			"description": "The number of items to skip before starting to collect the result set.",
			"routing": {
				"send": {
					"property": "page_offset",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Start Date Gte",
			"name": "start_date_gte",
			"type": "string",
			"default": "",
			"description": "Returns objects greater or equal the specified date.\n\nThis can be combined with start_date_lte key to receive only the selected period.\n",
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "Start Date Lte",
			"name": "start_date_lte",
			"type": "string",
			"default": "",
			"description": "Returns objects less or equal the specified date.\n\nThis can be combined with start_date_gte parameter to receive only the selected period\n",
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
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
		{
			"displayName": "States",
			"name": "states",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "Return objects with specific states.\nThe value can be repeated to retrieve multiple matching values (OR condition).",
			"routing": {
				"send": {
					"property": "states",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG Run"
					],
					"operation": [
						"Get Dag Runs Batch"
					]
				}
			}
		},
];
