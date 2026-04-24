import { SetMetadata } from "@nestjs/common"

export const CSRF_PUBLIC_KEY = "csrfPublicKey"

export const CsrfPublic = () => SetMetadata(CSRF_PUBLIC_KEY, true)
