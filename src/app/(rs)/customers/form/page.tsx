import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    // Edit customer form
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));

      if (!customer) {
        return (
          <>
            <h2 className='text-2xl mb-2'>
              Customer ID #{customerId} not found
            </h2>
            <BackButton title='Go Back' variant='default' />
          </>
        );
      }
      console.log(customer);
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
