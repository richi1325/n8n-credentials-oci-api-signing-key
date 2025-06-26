import { ICredentialType, INodeProperties } from "n8n-workflow";

export class OciAPISigningKey implements ICredentialType {
	name = "ociAPISigningKey";
	displayName = "OCI API Signing Key";
	documentationUrl =
		"https://docs.oracle.com/en-us/iaas/Content/API/Concepts/apisigningkey.htm";
	properties: INodeProperties[] = [
		{
			displayName: "User OCID",
			name: "userOcid",
			type: "string",
			default: "",
			placeholder: "ocid1.user.oc1..xxxxxxEXAMPLExxxxxx",
		},
		{
			displayName: "Tenancy OCID",
			name: "tenancyOcid",
			type: "string",
			default: "",
			placeholder: "ocid1.tenancy.oc1..xxxxxxEXAMPLExxxxxx",
		},
		{
			displayName: "Key Fingerprint",
			name: "keyFingerprint",
			type: "string",
			default: "",
			placeholder: "xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx",
		},
		{
			displayName: "Region",
			name: "region",
			type: "string",
			default: "",
			placeholder: "us-ashburn-1",
		},
		{
			displayName: "Private Key",
			name: "privateKey",
			type: "string",
			typeOptions: {
				multiline: true,
			},
			default: "",
			placeholder:
				"-----BEGIN RSA PRIVATE KEY-----\n...\n-----END RSA PRIVATE KEY-----",
		},
	];
}
