import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-full bg-blue text-yellow">
      <h1 className="text-8xl">About Me.</h1>
      <h3 className="text-xl text-white w-[50%] mt-8">
        Ciao! I'm [Your Name], a Data Analyst and Full Stack Developer based in
        Berlin, originally from Italy. I specialize in process automation and
        data-driven insights, helping businesses optimize their operations
        through innovative solutions. I work at [Company Name], where I merge my
        passion for data and technology. From Python to SQL, I leverage diverse
        tools to deliver meaningful results. Constantly exploring new trends, I
        ensure my work remains at the forefront of the industry. Beyond work, I
        embrace Berlin's cultural diversity and enjoy exploring its charm. This
        portfolio showcases my projects and journey. Let's collaborate on
        data-driven ventures that make a difference!
      </h3>
    </div>
  );
}
