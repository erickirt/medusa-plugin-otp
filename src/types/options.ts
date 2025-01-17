/**
 * ### Description
 * Options for the OTP service (optional).
 * #### Default to `{ ttl: 60, digits: 6 }`
 *
 * ### Example
 * In the following, it means that an OTP will be valid for 1 minute, ttl is expressed in seconds.
 *
 * ```js
 * {
 *   resolve: `@perseidesjs/medusa-plugin-otp`,
 *   options: {
 * 		ttl: 30 // 30 seconds
 * 		digits: 6 // 6 digits
 *   },
 * }
 * ```
 */
export type PluginOptions = {
	ttl?: number
	digits?: number
}
