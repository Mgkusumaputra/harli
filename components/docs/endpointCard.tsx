import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CodeBlock, paraisoDark } from "react-code-blocks";
import { SITE_URL } from "@/utils/env";

interface EndpointCardProps {
    title: string;
    method: "GET" | "POST" | "PUT" | "DELETE";
    endpoint: string;
    reqExample: string;
    responseEx: string;
}

export default function EndpointCard({ title, method, endpoint, reqExample, responseEx }: EndpointCardProps) {
  return (
    <div className="bg-primary/60 text-primary-foreground rounded-md flex flex-col gap-2 py-2 px-4 w-full">
      <p className="text-base leading-7 font-semibold">{title}</p>
      <div className="flex gap-2">
        <Badge>{method}</Badge>
        <p className="font-semibold">{SITE_URL}/{endpoint}</p>
      </div>
      <p className="text-base leading-7">Contoh Request:</p>
      <div className="bg-primary text-primary-foreground rounded-md py-2 px-4 w-full">
        <p className="font-normal">
          GET /{reqExample} HTTP/1.1 <br /> Content-Type: application/json
          <br />
          Host: {SITE_URL}
        </p>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Contoh Response</AccordionTrigger>
          <AccordionContent>
            <CodeBlock
              text={responseEx}
              language="JSON"
              showLineNumbers={false}
              theme={paraisoDark}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
