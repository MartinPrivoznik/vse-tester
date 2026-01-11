import { Skeleton } from "@nextui-org/skeleton";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Progress } from "@nextui-org/progress";

export function TestLoadingSkeleton() {
  return (
    <>
      {/* Test title skeleton */}
      <Skeleton className="rounded-lg mb-2 w-fit">
        <div className="h-7 w-48 rounded-lg bg-default-200" />
      </Skeleton>

      {/* Test subtitle skeleton */}
      <Skeleton className="rounded-lg mb-4 w-fit">
        <div className="h-5 w-36 rounded-lg bg-default-200" />
      </Skeleton>

      {/* Statistics row skeleton */}
      <div className="w-full">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 min-h-full flex items-end">
            <Progress aria-label="Loading..." className="w-full" value={0} />
          </div>
          <div className="w-full md:w-1/3">
            <Card className="w-full h-full p-2">
              <CardBody className="p-1 px-3 flex-row gap-4">
                <Skeleton className="rounded-lg">
                  <div className="h-5 w-12 rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="rounded-lg ml-auto">
                  <div className="h-5 w-20 rounded-lg bg-default-200" />
                </Skeleton>
                <span className="text-default-300 font-bold">/</span>
                <Skeleton className="rounded-lg">
                  <div className="h-5 w-20 rounded-lg bg-default-200" />
                </Skeleton>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col md:flex-row gap-8 mt-4">
        {/* Question section skeleton */}
        <div className="w-full md:w-2/3">
          <Card className="w-full p-1 md:p-3">
            <CardHeader className="flex gap-3">
              <div className="w-full flex items-center">
                <Skeleton className="rounded-lg w-full">
                  <div className="h-6 w-full rounded-lg bg-default-200" />
                </Skeleton>
              </div>
            </CardHeader>
            <Divider />
            <CardBody className="mt-0 md:mt-2 p-1 md:p-3" />
          </Card>
        </div>

        {/* Side panel skeleton */}
        <div className="w-full md:w-1/3">
          <Card className="w-full p-3">
            <CardBody className="mt-2 flex flex-col gap-10">
              <div className="flex flex-col gap-4">
                <Skeleton className="rounded-lg">
                  <div className="h-12 w-full rounded-lg bg-default-200" />
                </Skeleton>
                <div className="mt-8" />
                <Skeleton className="rounded-lg">
                  <div className="h-12 w-full rounded-lg bg-default-200" />
                </Skeleton>
                <Skeleton className="rounded-lg">
                  <div className="h-12 w-full rounded-lg bg-default-200" />
                </Skeleton>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
}

export default function Loading() {
  return (
    <main className="container mx-auto max-w-7xl pt-7 px-6 flex-grow">
      <section className="flex flex-col">
        <TestLoadingSkeleton />
      </section>
    </main>
  );
}
