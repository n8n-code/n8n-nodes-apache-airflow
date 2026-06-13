import type { INodeProperties } from 'n8n-workflow';

export const xComDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"X Com"
					]
				}
			},
			"options": [
				{
					"name": "Get Xcom Entries",
					"value": "Get Xcom Entries",
					"action": "List XCom entries",
					"description": "This endpoint allows specifying `~` as the dag_id, dag_run_id, task_id to retrieve XCOM entries for for all DAGs, DAG runs and task instances. XCom values won't be returned as they can be large. Use this endpoint to get a list of XCom entries and then fetch individual entry to get value.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/xcomEntries"
						}
					}
				},
				{
					"name": "Get Xcom Entry",
					"value": "Get Xcom Entry",
					"action": "Get an XCom entry",
					"description": "Get an XCom entry",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/dags/{{$parameter[\"dag_id\"]}}/dagRuns/{{$parameter[\"dag_run_id\"]}}/taskInstances/{{$parameter[\"task_id\"]}}/xcomEntries/{{$parameter[\"xcom_key\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"X Com"
					],
					"operation": [
						"Get Xcom Entries"
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
						"X Com"
					],
					"operation": [
						"Get Xcom Entries"
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
						"X Com"
					],
					"operation": [
						"Get Xcom Entries"
					]
				}
			}
		},
		{
			"displayName": "GET /dags/{dag_id}/dagRuns/{dag_run_id}/taskInstances/{task_id}/xcomEntries/{xcom_key}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"X Com"
					],
					"operation": [
						"Get Xcom Entry"
					]
				}
			}
		},
		{
			"displayName": "Deserialize",
			"name": "deserialize",
			"description": "Whether to deserialize an XCom value when using a custom XCom backend.\n\nThe XCom API endpoint calls `orm_deserialize_value` by default since an XCom may contain value\nthat is potentially expensive to deserialize in the web server. Setting this to true overrides\nthe consideration, and calls `deserialize_value` instead.\n\nThis parameter is not meaningful when using the default XCom backend.\n\n*New in version 2.4.0*\n",
			"default": false,
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "deserialize",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"X Com"
					],
					"operation": [
						"Get Xcom Entry"
					]
				}
			}
		},
];
