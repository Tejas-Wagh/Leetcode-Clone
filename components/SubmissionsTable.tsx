import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SubmissionRenderer from "./SubmissionRenderer";
import { LANGUAGES_VERSIONS } from "@/lib/problems";

export const SubmissionsTable = ({ submissions }: { submissions: any }) => {
  return (
  <div className=" px-4 py-2 rounded-sm">
    <Table>
      <TableHeader className="">
        <TableRow className="">
          <TableHead className="w-[200px] text-[14px] text-left">Status</TableHead>
          <TableHead className="w-[200px] text-[14px] text-left">Language</TableHead>
          <TableHead className="w-[200px] text-[14px] text-left">Date</TableHead>
          <TableHead className="flex items-center justify-center w-[200px] text-[14px] text-left">
            Submitted by
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {submissions?.map((submission: any) => (
          <SubmissionRenderer
            key={submission.id}
            code = {submission.code}
            language={Object.keys(LANGUAGES_VERSIONS).find(k => LANGUAGES_VERSIONS[k] === submission.languageID) as string}
            status={submission.status}
            date={submission.createdAt.toISOString().split('T')[0] as string}
            user={submission.User.email}
          />
        ))}
      </TableBody>
    </Table>
    </div>
  );
};
