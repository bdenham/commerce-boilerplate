export declare const GET_CUSTOMER_ADDRESS = "\n  query GET_CUSTOMER_ADDRESS {\n    customer {\n      addresses {\n        firstname\n        lastname\n        city\n        company\n        country_code\n        region {\n          region\n          region_code\n          region_id\n        }\n        custom_attributesV2 {\n          ... on AttributeValue {\n            code\n            value\n          }\n        }\n        telephone\n        id\n        vat_id\n        postcode\n        street\n        default_shipping\n        default_billing\n      }\n    }\n  }\n";
//# sourceMappingURL=getCustomerAddress.graphql.d.ts.map