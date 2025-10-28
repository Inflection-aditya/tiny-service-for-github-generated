/**
 * Authentication and authorization types
 */

// Resource identifier type
export type ResourceId = string | number;

// HTTP request types
export type RequestType = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

// Permission and role types
export interface Permission {
    id: ResourceId;
    name: string;
    description?: string;
}

export interface Role {
    id: ResourceId;
    name: string;
    description?: string;
    permissions?: Permission[];
}

// User context types
export interface UserContext {
    userId: ResourceId;
    username?: string;
    email?: string;
    roles?: string[];
    permissions?: string[];
    tenantId?: ResourceId;
}
