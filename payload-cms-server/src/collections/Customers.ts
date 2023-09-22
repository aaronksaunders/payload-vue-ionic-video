import { CollectionConfig } from "payload/types";

const Customers: CollectionConfig = {
  slug: "customers",
  auth: true,
  access: {
    create: () => true,
  },
  admin: {
    useAsTitle: "email",
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "full_name",
      type: "text",
      label: "Full Name",
      required: true,
    },
    {
      name: "birthday",
      type: "date",
      label: "Birthday",
      required: true,
    },
  ],
};

export default Customers;
