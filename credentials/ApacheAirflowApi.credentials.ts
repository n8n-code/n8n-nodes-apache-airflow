import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApacheAirflowApi implements ICredentialType {
        name = 'N8nDevApacheAirflowApi';

        displayName = 'Apache Airflow API';

        icon: Icon = { light: 'file:../nodes/ApacheAirflow/apache-airflow.svg', dark: 'file:../nodes/ApacheAirflow/apache-airflow.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '/api/v1',
                        required: true,
                        placeholder: '/api/v1',
                        description: 'The base URL of your Apache Airflow API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
