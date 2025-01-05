"use client";

import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";
import { Form } from "@nextui-org/form";
import { Input } from "@nextui-org/input";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

export const AddTestModalButton = ({
  text,
  variant = "solid",
  uploadTest,
  onFinish,
  redirectToMyWork = false,
}: {
  text: string;
  variant: "ghost" | "solid";
  uploadTest: (name: string, file: File) => Promise<void>;
  onFinish?: () => void;
  redirectToMyWork?: boolean;
}) => {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const file = data.testFile as File;
    const name = data.testName as string;

    await uploadTest(name, file);
    onClose();

    if (redirectToMyWork) {
      router.push("/my-work");
    }

    if (onFinish) {
      onFinish();
    }
  };

  return (
    <>
      <Button variant={variant} onPress={onOpen}>
        {text}
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <Form
          className="w-full max-w-xs"
          validationBehavior="native"
          onSubmit={onSubmit}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Přidat test
                </ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-6">
                    <Input
                      isRequired
                      errorMessage="Zadejte název testu"
                      label="Název testu"
                      labelPlacement="outside"
                      name="testName"
                      placeholder="Zadejte název testu"
                      type="text"
                    />
                    <Input
                      isRequired
                      accept=".txt"
                      errorMessage="Vložte soubor s testem"
                      label="Testový soubor"
                      labelPlacement="outside"
                      name="testFile"
                      placeholder="Vyberte soubor s testem"
                      type="file"
                    />
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Zavřít
                  </Button>
                  <Button color="primary" type="submit">
                    Přidat
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Form>
      </Modal>
    </>
  );
};
