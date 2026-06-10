import type { INodeProperties } from 'n8n-workflow';

export const datasetDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Dataset"
					]
				}
			},
			"options": [
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
					"name": "Get Datasets",
					"value": "Get Datasets",
					"action": "List datasets",
					"description": "List datasets",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datasets"
						}
					}
				},
				{
					"name": "Get Dataset Events",
					"value": "Get Dataset Events",
					"action": "Get dataset events",
					"description": "Get dataset events",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datasets/events"
						}
					}
				},
				{
					"name": "Get Dataset",
					"value": "Get Dataset",
					"action": "Get a dataset",
					"description": "Get a dataset by uri.",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/datasets/{{$parameter[\"uri\"]}}"
						}
					}
				}
			],
			"default": ""
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
						"Dataset"
					],
					"operation": [
						"Get Upstream Dataset Events"
					]
				}
			}
		},
		{
			"displayName": "GET /datasets",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dataset"
					],
					"operation": [
						"Get Datasets"
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
						"Dataset"
					],
					"operation": [
						"Get Datasets"
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
						"Dataset"
					],
					"operation": [
						"Get Datasets"
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
						"Dataset"
					],
					"operation": [
						"Get Datasets"
					]
				}
			}
		},
		{
			"displayName": "Uri Pattern",
			"name": "uri_pattern",
			"description": "If set, only return datasets with uris matching this pattern.\n",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "uri_pattern",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Dataset"
					],
					"operation": [
						"Get Datasets"
					]
				}
			}
		},
		{
			"displayName": "GET /datasets/events",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dataset"
					],
					"operation": [
						"Get Dataset Events"
					]
				}
			}
		},
		{
			"displayName": "GET /datasets/{uri}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Dataset"
					],
					"operation": [
						"Get Dataset"
					]
				}
			}
		},
];
