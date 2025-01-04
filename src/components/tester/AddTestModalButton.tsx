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
import { Radio, RadioGroup } from "@nextui-org/radio";
import { FormEvent, useState } from "react";

import useTests from "@/src/hooks/useTests";

export const AddTestModalButton = ({
  text,
  variant = "solid",
}: {
  text: string;
  variant: "ghost" | "solid";
}) => {
  const tests = useTests();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [testType, setTestType] = useState<string>("multiple-choice");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.currentTarget));

    const file = data.testFile as File;
    const name = data.testName as string;
    const type = data.testType as string;

    await tests.uploadTest(name, type === "multiple-choice", file);
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
                    <RadioGroup
                      label="Typ testu"
                      name="testType"
                      value={testType}
                      onChange={(e) => setTestType(e.target.value)}
                    >
                      <Radio value="multiple-choice">
                        Více možných odpovědí
                      </Radio>
                      <Radio value="single-choice">Jedna správná odpověď</Radio>
                    </RadioGroup>
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
