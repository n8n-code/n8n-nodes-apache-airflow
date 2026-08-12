import type { INodeProperties } from 'n8n-workflow';

export const dagDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					]
				}
			},
			"options": [
				{
					"name": "Get Dag Source",
					"value": "Get Dag Source",
					"action": "Get a source code",
					"description": "Get a source code using file token.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dagSources/{{$parameter[\"file_token\"]}}"
						}
					}
				},
				{
					"name": "Get Dags",
					"value": "Get Dags",
					"action": "List DAGs",
					"description": "List DAGs in the database.\n`dag_id_pattern` can be set to match dags of a specific pattern\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags"
						}
					}
				},
				{
					"name": "Patch Dags",
					"value": "Patch Dags",
					"action": "Update DAGs",
					"description": "Update DAGs of a given dag_id_pattern using UpdateMask.\nThis endpoint allows specifying `~` as the dag_id_pattern to update all DAGs.\n*New in version 2.3.0*\n",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags"
						}
					}
				},
				{
					"name": "Delete Dag",
					"value": "Delete Dag",
					"action": "Delete a DAG",
					"description": "Deletes all metadata related to the DAG, including finished DAG Runs and Tasks.\nLogs are not deleted. This action cannot be undone.\n\n*New in version 2.2.0*\n",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}"
						}
					}
				},
				{
					"name": "Get Dag",
					"value": "Get Dag",
					"action": "Get basic information about a DAG",
					"description": "Presents only information available in database (DAGModel).\nIf you need detailed information, consider using GET /dags/{dag_id}/details.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}"
						}
					}
				},
				{
					"name": "Patch Dag",
					"value": "Patch Dag",
					"action": "Update a DAG",
					"description": "Update a DAG",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}"
						}
					}
				},
				{
					"name": "Post Clear Task Instances",
					"value": "Post Clear Task Instances",
					"action": "Clear a set of task instances",
					"description": "Clears a set of task instances associated with the DAG for a specified date range.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/clearTaskInstances"
						}
					}
				},
				{
					"name": "Get Dag Details",
					"value": "Get Dag Details",
					"action": "Get a simplified representation of DAG",
					"description": "The response contains many DAG attributes, so the response can be large. If possible, consider using GET /dags/{dag_id}.\n",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/details"
						}
					}
				},
				{
					"name": "Get Tasks",
					"value": "Get Tasks",
					"action": "Get tasks for DAG",
					"description": "Get tasks for DAG",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/tasks"
						}
					}
				},
				{
					"name": "Get Task",
					"value": "Get Task",
					"action": "Get simplified representation of a task",
					"description": "Get simplified representation of a task",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/tasks/{{$parameter[\"task_id\"]}}"
						}
					}
				},
				{
					"name": "Post Set Task Instances State",
					"value": "Post Set Task Instances State",
					"action": "Set a state of task instances",
					"description": "Updates the state for multiple task instances simultaneously.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/updateTaskInstancesState"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dagSources/{file_token}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dag Source"
					]
				}
			}
		},
		{
			"displayName": "GET /dags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dags"
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
						"DAG"
					],
					"operation": [
						"Get Dags"
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
						"DAG"
					],
					"operation": [
						"Get Dags"
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
						"DAG"
					],
					"operation": [
						"Get Dags"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"description": "List of tags to filter results.\n\n*New in version 2.2.0*\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dags"
					]
				}
			}
		},
		{
			"displayName": "Only Active",
			"name": "only_active",
			"description": "Only filter active DAGs.\n\n*New in version 2.1.1*\n",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "only_active",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dags"
					]
				}
			}
		},
		{
			"displayName": "Dag ID Pattern",
			"name": "dag_id_pattern",
			"description": "If set, only return DAGs with dag_ids matching this pattern.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dag_id_pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dags"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
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
						"DAG"
					],
					"operation": [
						"Patch Dags"
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
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"description": "List of tags to filter results.\n\n*New in version 2.2.0*\n",
			"default": "[\n  null\n]",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "tags",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
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
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Only Active",
			"name": "only_active",
			"description": "Only filter active DAGs.\n\n*New in version 2.1.1*\n",
			"default": true,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "only_active",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Dag ID Pattern",
			"name": "dag_id_pattern",
			"required": true,
			"description": "If set, only update DAGs with dag_ids matching this pattern.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "dag_id_pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Dag ID",
			"name": "dag_id",
			"type": "string",
			"default": "",
			"description": "The ID of the DAG.",
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
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Default View",
			"name": "default_view",
			"type": "string",
			"default": "",
			"description": "Default view of the DAG inside the webserver\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "default_view",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents.\n",
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
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "File Token",
			"name": "file_token",
			"type": "string",
			"default": "",
			"description": "The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change.\n",
			"routing": {
				"send": {
					"property": "file_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Fileloc",
			"name": "fileloc",
			"type": "string",
			"default": "",
			"description": "The absolute path to the file.",
			"routing": {
				"send": {
					"property": "fileloc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Has Import Errors",
			"name": "has_import_errors",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG has import errors\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "has_import_errors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Has Task Concurrency Limits",
			"name": "has_task_concurrency_limits",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG has task concurrency limits\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "has_task_concurrency_limits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG is currently seen by the scheduler(s).\n\n*New in version 2.1.1*\n\n*Changed in version 2.2.0*&#58; Field is read-only.\n",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Is Paused",
			"name": "is_paused",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG is paused.",
			"routing": {
				"send": {
					"property": "is_paused",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Is Subdag",
			"name": "is_subdag",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG is SubDAG.",
			"routing": {
				"send": {
					"property": "is_subdag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Last Expired",
			"name": "last_expired",
			"type": "string",
			"default": "",
			"description": "Time when the DAG last received a refresh signal\n(e.g. the DAG's \"refresh\" button was clicked in the web UI)\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "last_expired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Last Parsed Time",
			"name": "last_parsed_time",
			"type": "string",
			"default": "",
			"description": "The last time the DAG was parsed.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "last_parsed_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Last Pickled",
			"name": "last_pickled",
			"type": "string",
			"default": "",
			"description": "The last time the DAG was pickled.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "last_pickled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Max Active Runs",
			"name": "max_active_runs",
			"type": "number",
			"default": 0,
			"description": "Maximum number of active DAG runs for the DAG\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "max_active_runs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Max Active Tasks",
			"name": "max_active_tasks",
			"type": "number",
			"default": 0,
			"description": "Maximum number of active tasks that can be run on the DAG\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "max_active_tasks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun",
			"name": "next_dagrun",
			"type": "string",
			"default": "",
			"description": "The logical date of the next dag run.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun Create After",
			"name": "next_dagrun_create_after",
			"type": "string",
			"default": "",
			"description": "Earliest time at which this ``next_dagrun`` can be created.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun_create_after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun Data Interval End",
			"name": "next_dagrun_data_interval_end",
			"type": "string",
			"default": "",
			"description": "The end of the interval of the next dag run.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun_data_interval_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun Data Interval Start",
			"name": "next_dagrun_data_interval_start",
			"type": "string",
			"default": "",
			"description": "The start of the interval of the next dag run.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun_data_interval_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Owners",
			"name": "owners",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "owners",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Pickle ID",
			"name": "pickle_id",
			"type": "string",
			"default": "",
			"description": "Foreign key to the latest pickle_id\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "pickle_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Root Dag ID",
			"name": "root_dag_id",
			"type": "string",
			"default": "",
			"description": "If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null.",
			"routing": {
				"send": {
					"property": "root_dag_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Schedule Interval",
			"name": "schedule_interval",
			"type": "string",
			"default": "{}",
			"description": "Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's\nexecution_date to figure out the next schedule.\n",
			"routing": {
				"send": {
					"property": "schedule_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Scheduler Lock",
			"name": "scheduler_lock",
			"type": "boolean",
			"default": true,
			"description": "Whether (one of) the scheduler is scheduling this DAG at the moment\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "scheduler_lock",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "List of tags.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "Timetable Description",
			"name": "timetable_description",
			"type": "string",
			"default": "",
			"description": "Timetable/Schedule Interval description.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "timetable_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dags"
					]
				}
			}
		},
		{
			"displayName": "DELETE /dags/{dag_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Delete Dag"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dag"
					]
				}
			}
		},
		{
			"displayName": "PATCH /dags/{dag_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
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
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Dag ID",
			"name": "dag_id",
			"type": "string",
			"default": "",
			"description": "The ID of the DAG.",
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
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Default View",
			"name": "default_view",
			"type": "string",
			"default": "",
			"description": "Default view of the DAG inside the webserver\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "default_view",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Description",
			"name": "description",
			"type": "string",
			"default": "",
			"description": "User-provided DAG description, which can consist of several sentences or paragraphs that describe DAG contents.\n",
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
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "File Token",
			"name": "file_token",
			"type": "string",
			"default": "",
			"description": "The key containing the encrypted path to the file. Encryption and decryption take place only on the server. This prevents the client from reading an non-DAG file. This also ensures API extensibility, because the format of encrypted data may change.\n",
			"routing": {
				"send": {
					"property": "file_token",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Fileloc",
			"name": "fileloc",
			"type": "string",
			"default": "",
			"description": "The absolute path to the file.",
			"routing": {
				"send": {
					"property": "fileloc",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Has Import Errors",
			"name": "has_import_errors",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG has import errors\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "has_import_errors",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Has Task Concurrency Limits",
			"name": "has_task_concurrency_limits",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG has task concurrency limits\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "has_task_concurrency_limits",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Is Active",
			"name": "is_active",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG is currently seen by the scheduler(s).\n\n*New in version 2.1.1*\n\n*Changed in version 2.2.0*&#58; Field is read-only.\n",
			"routing": {
				"send": {
					"property": "is_active",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Is Paused",
			"name": "is_paused",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG is paused.",
			"routing": {
				"send": {
					"property": "is_paused",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Is Subdag",
			"name": "is_subdag",
			"type": "boolean",
			"default": true,
			"description": "Whether the DAG is SubDAG.",
			"routing": {
				"send": {
					"property": "is_subdag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Last Expired",
			"name": "last_expired",
			"type": "string",
			"default": "",
			"description": "Time when the DAG last received a refresh signal\n(e.g. the DAG's \"refresh\" button was clicked in the web UI)\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "last_expired",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Last Parsed Time",
			"name": "last_parsed_time",
			"type": "string",
			"default": "",
			"description": "The last time the DAG was parsed.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "last_parsed_time",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Last Pickled",
			"name": "last_pickled",
			"type": "string",
			"default": "",
			"description": "The last time the DAG was pickled.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "last_pickled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Max Active Runs",
			"name": "max_active_runs",
			"type": "number",
			"default": 0,
			"description": "Maximum number of active DAG runs for the DAG\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "max_active_runs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Max Active Tasks",
			"name": "max_active_tasks",
			"type": "number",
			"default": 0,
			"description": "Maximum number of active tasks that can be run on the DAG\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "max_active_tasks",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun",
			"name": "next_dagrun",
			"type": "string",
			"default": "",
			"description": "The logical date of the next dag run.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun Create After",
			"name": "next_dagrun_create_after",
			"type": "string",
			"default": "",
			"description": "Earliest time at which this ``next_dagrun`` can be created.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun_create_after",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun Data Interval End",
			"name": "next_dagrun_data_interval_end",
			"type": "string",
			"default": "",
			"description": "The end of the interval of the next dag run.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun_data_interval_end",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Next Dagrun Data Interval Start",
			"name": "next_dagrun_data_interval_start",
			"type": "string",
			"default": "",
			"description": "The start of the interval of the next dag run.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "next_dagrun_data_interval_start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Owners",
			"name": "owners",
			"type": "json",
			"default": "[\n  null\n]",
			"routing": {
				"send": {
					"property": "owners",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Pickle ID",
			"name": "pickle_id",
			"type": "string",
			"default": "",
			"description": "Foreign key to the latest pickle_id\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "pickle_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Root Dag ID",
			"name": "root_dag_id",
			"type": "string",
			"default": "",
			"description": "If the DAG is SubDAG then it is the top level DAG identifier. Otherwise, null.",
			"routing": {
				"send": {
					"property": "root_dag_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Schedule Interval",
			"name": "schedule_interval",
			"type": "string",
			"default": "{}",
			"description": "Schedule interval. Defines how often DAG runs, this object gets added to your latest task instance's\nexecution_date to figure out the next schedule.\n",
			"routing": {
				"send": {
					"property": "schedule_interval",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Scheduler Lock",
			"name": "scheduler_lock",
			"type": "boolean",
			"default": true,
			"description": "Whether (one of) the scheduler is scheduling this DAG at the moment\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "scheduler_lock",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Tags",
			"name": "tags",
			"type": "json",
			"default": "[\n  {}\n]",
			"description": "List of tags.",
			"routing": {
				"send": {
					"property": "tags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "Timetable Description",
			"name": "timetable_description",
			"type": "string",
			"default": "",
			"description": "Timetable/Schedule Interval description.\n\n*New in version 2.3.0*\n",
			"routing": {
				"send": {
					"property": "timetable_description",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Patch Dag"
					]
				}
			}
		},
		{
			"displayName": "POST /dags/{dag_id}/clearTaskInstances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Dag Run ID",
			"name": "dag_run_id",
			"type": "string",
			"default": "",
			"description": "The DagRun ID for this task instance",
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
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
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
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "end_date",
			"type": "string",
			"default": "",
			"description": "The maximum execution date to clear.",
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
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Include Downstream",
			"name": "include_downstream",
			"type": "boolean",
			"default": false,
			"description": "If set to true, downstream tasks are also affected.",
			"routing": {
				"send": {
					"property": "include_downstream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Include Future",
			"name": "include_future",
			"type": "boolean",
			"default": false,
			"description": "If set to True, also tasks from future DAG Runs are affected.",
			"routing": {
				"send": {
					"property": "include_future",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Include Parentdag",
			"name": "include_parentdag",
			"type": "boolean",
			"default": true,
			"description": "Clear tasks in the parent dag of the subdag.",
			"routing": {
				"send": {
					"property": "include_parentdag",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Include Past",
			"name": "include_past",
			"type": "boolean",
			"default": false,
			"description": "If set to True, also tasks from past DAG Runs are affected.",
			"routing": {
				"send": {
					"property": "include_past",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Include Subdags",
			"name": "include_subdags",
			"type": "boolean",
			"default": true,
			"description": "Clear tasks in subdags and clear external tasks indicated by ExternalTaskMarker.",
			"routing": {
				"send": {
					"property": "include_subdags",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Include Upstream",
			"name": "include_upstream",
			"type": "boolean",
			"default": false,
			"description": "If set to true, upstream tasks are also affected.",
			"routing": {
				"send": {
					"property": "include_upstream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Only Failed",
			"name": "only_failed",
			"type": "boolean",
			"default": true,
			"description": "Only clear failed tasks.",
			"routing": {
				"send": {
					"property": "only_failed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Only Running",
			"name": "only_running",
			"type": "boolean",
			"default": false,
			"description": "Only clear running tasks.",
			"routing": {
				"send": {
					"property": "only_running",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Reset Dag Runs",
			"name": "reset_dag_runs",
			"type": "boolean",
			"default": true,
			"description": "Set state of DAG runs to RUNNING.",
			"routing": {
				"send": {
					"property": "reset_dag_runs",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "start_date",
			"type": "string",
			"default": "",
			"description": "The minimum execution date to clear.",
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
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "Task Ids",
			"name": "task_ids",
			"type": "json",
			"default": "[\n  null\n]",
			"description": "A list of task ids to clear.\n\n*New in version 2.1.0*\n",
			"routing": {
				"send": {
					"property": "task_ids",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Clear Task Instances"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Dag Details"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/tasks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Tasks"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/tasks/{task_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Get Task"
					]
				}
			}
		},
		{
			"displayName": "POST /dags/{dag_id}/updateTaskInstancesState",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Dag Run ID",
			"name": "dag_run_id",
			"type": "string",
			"default": "",
			"description": "The task instance's DAG run ID. Either set this or execution_date but not both.\n\n*New in version 2.3.0*\n",
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
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Dry Run",
			"name": "dry_run",
			"type": "boolean",
			"default": true,
			"description": "If set, don't actually run this operation. The response will contain a list of task instances\nplanned to be affected, but won't be modified in any way.\n",
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
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Execution Date",
			"name": "execution_date",
			"type": "string",
			"default": "",
			"description": "The execution date. Either set this or dag_run_id but not both.",
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
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Include Downstream",
			"name": "include_downstream",
			"type": "boolean",
			"default": true,
			"description": "If set to true, downstream tasks are also affected.",
			"routing": {
				"send": {
					"property": "include_downstream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Include Future",
			"name": "include_future",
			"type": "boolean",
			"default": true,
			"description": "If set to True, also tasks from future DAG Runs are affected.",
			"routing": {
				"send": {
					"property": "include_future",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Include Past",
			"name": "include_past",
			"type": "boolean",
			"default": true,
			"description": "If set to True, also tasks from past DAG Runs are affected.",
			"routing": {
				"send": {
					"property": "include_past",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Include Upstream",
			"name": "include_upstream",
			"type": "boolean",
			"default": true,
			"description": "If set to true, upstream tasks are also affected.",
			"routing": {
				"send": {
					"property": "include_upstream",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
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
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
		{
			"displayName": "Task ID",
			"name": "task_id",
			"type": "string",
			"default": "",
			"description": "The task ID.",
			"routing": {
				"send": {
					"property": "task_id",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"DAG"
					],
					"operation": [
						"Post Set Task Instances State"
					]
				}
			}
		},
];
