import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { custometId } = await searchParams;

    // Edit customer form
    if (custometId) {
      const customer = await getCustomer(parseInt(custometId));

      if (!customer) {
        return (
          <>
            <h2 className='text-2xl mb-2'>
              Customer ID #{custometId} not found
            </h2>
            {/* Back Button */}
          </>
        );
      }

      // Put customer from component
    } else {
      // New customer from component
    }
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
  }
}
