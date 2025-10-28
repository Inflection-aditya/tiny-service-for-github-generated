import { RequestType, ResourceId } from "../../domain.types/auth.types";
import { CurrentClient } from "../../domain.types/miscellaneous/current.client";
import { CurrentUser } from "../../domain.types/miscellaneous/current.user";

declare global{
    namespace Express {
        interface Request {
            currentUser          : CurrentUser,
            currentClient        : CurrentClient
            context              : string;
            resourceType         : string;
            resourceId           : ResourceId;
            requestType          : RequestType;
            resourceOwnerUserId  : ResourceId;
            currentUserTenantId  : ResourceId;
            resourceTenantId     : ResourceId;
            allowAnonymous       : boolean;       //User authorization is not needed. Client app authentication is needed. May need user authentication.
            publicUrl            : boolean;       //Public URL. No type of authentication is required. For example, download link for public profile image, etc.
            singleResourceRequest: boolean;       //Single resource request. For example, get user by id, get client by id, etc.
            customAuthorization  : boolean;       //This flag indicates that the resource has custom authorization rules, on the top of the default authorization rules.
        }
    }
}
