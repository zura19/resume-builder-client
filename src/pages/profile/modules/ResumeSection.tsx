import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, FileText } from "lucide-react";
import { cn, formatDate } from "@/lib/utils";
import type { ResumeType } from "@/lib/types/AiGeneratedResume";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface props {
  resumes?: {
    id: string;
    title: string;
    type: ResumeType;
    createdAt: string;
  }[];
}

const gradients = {
  executive: "from-emerald-500/20 to-teal-600/20",
  creative: "from-cyan-500/50 to-pink-500/50",
  classic: "from-gray-400/20 to-gray-600/20",
  modern: "from-blue-500/30 to-blue-600/30",
};

export default function ResumeSection({ resumes }: props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-foreground">
          Resumes
        </h2>
        <span className="text-sm text-muted-foreground">
          {resumes?.length} {resumes?.length === 1 ? "resume" : "resumes"}
        </span>
      </div>

      {resumes?.length === 0 ? (
        <Card className="p-8 bg-background/50 backdrop-blur-md">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <FileText className="mb-4 h-12 w-12 text-muted-foreground" />
            <p className="text-muted-foreground">No resumes found</p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {resumes?.map((resume, i) => (
            <motion.div
              key={resume.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
            >
              <Card
                key={resume.id}
                className="p-0 m-0 gap-0 rounded-lg grid grid-cols-[5fr_10fr] bg-background/50 backdrop-blur-md transition-all hover:shadow-md"
              >
                <div
                  className={cn(
                    "bg-linear-to-r w-full rounded-l-lg",
                    gradients[resume.type]
                  )}
                >
                  <div className="flex items-center h-full w-full justify-center">
                    <FileText className="size-12 text-primary" />
                  </div>
                </div>
                <CardHeader className="p-8 rounded-r-lg space-y-2">
                  <CardTitle className="text-lg leading-6">
                    {resume.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1.5">
                    <Calendar className="size-4" />
                    <span>{formatDate(resume.createdAt)}</span>
                  </CardDescription>
                  <CardFooter className="flex items-center p-0">
                    <Link to={`/resume/${resume.id}`} className="flex-1">
                      <Button className="w-full">View</Button>
                    </Link>
                  </CardFooter>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
