import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { configDescription } from './resources/config';
import { connectionDescription } from './resources/connection';
import { dagDescription } from './resources/dag';
import { dagRunDescription } from './resources/dag-run';
import { eventLogDescription } from './resources/event-log';
import { importErrorDescription } from './resources/import-error';
import { monitoringDescription } from './resources/monitoring';
import { poolDescription } from './resources/pool';
import { providerDescription } from './resources/provider';
import { taskInstanceDescription } from './resources/task-instance';
import { variableDescription } from './resources/variable';
import { xComDescription } from './resources/x-com';
import { pluginDescription } from './resources/plugin';
import { roleDescription } from './resources/role';
import { permissionDescription } from './resources/permission';
import { userDescription } from './resources/user';
import { dagWarningDescription } from './resources/dag-warning';
import { datasetDescription } from './resources/dataset';

export class ApacheAirflow implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apache Airflow',
                name: 'N8nDevApacheAirflow',
                icon: { light: 'file:./apache-airflow.svg', dark: 'file:./apache-airflow.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Overview',
                defaults: { name: 'Apache Airflow' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApacheAirflowApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "Config",
					"value": "Config",
					"description": ""
				},
				{
					"name": "Connection",
					"value": "Connection",
					"description": ""
				},
				{
					"name": "DAG",
					"value": "DAG",
					"description": ""
				},
				{
					"name": "DAG Run",
					"value": "DAG Run",
					"description": ""
				},
				{
					"name": "Event Log",
					"value": "Event Log",
					"description": ""
				},
				{
					"name": "Import Error",
					"value": "Import Error",
					"description": ""
				},
				{
					"name": "Monitoring",
					"value": "Monitoring",
					"description": ""
				},
				{
					"name": "Pool",
					"value": "Pool",
					"description": ""
				},
				{
					"name": "Provider",
					"value": "Provider",
					"description": ""
				},
				{
					"name": "Task Instance",
					"value": "Task Instance",
					"description": ""
				},
				{
					"name": "Variable",
					"value": "Variable",
					"description": ""
				},
				{
					"name": "X Com",
					"value": "X Com",
					"description": ""
				},
				{
					"name": "Plugin",
					"value": "Plugin",
					"description": ""
				},
				{
					"name": "Role",
					"value": "Role",
					"description": ""
				},
				{
					"name": "Permission",
					"value": "Permission",
					"description": ""
				},
				{
					"name": "User",
					"value": "User",
					"description": ""
				},
				{
					"name": "Dag Warning",
					"value": "Dag Warning",
					"description": ""
				},
				{
					"name": "Dataset",
					"value": "Dataset",
					"description": ""
				}
			],
			"default": ""
		},
		...configDescription,
		...connectionDescription,
		...dagDescription,
		...dagRunDescription,
		...eventLogDescription,
		...importErrorDescription,
		...monitoringDescription,
		...poolDescription,
		...providerDescription,
		...taskInstanceDescription,
		...variableDescription,
		...xComDescription,
		...pluginDescription,
		...roleDescription,
		...permissionDescription,
		...userDescription,
		...dagWarningDescription,
		...datasetDescription
                ],
        };
}
