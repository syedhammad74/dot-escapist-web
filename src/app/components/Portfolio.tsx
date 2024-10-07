import React from "react";
import  Timeline  from "@/components/ui/timeline";

export default function Portfolio() {
  const projects = [
    {
      title: "Cancer Clarity",
      content: (
        <div className="">
          <p>
            This project involves building a scalable and responsive web
            application with React and Node.js. Features include authentication,
            real-time updates, and more.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>React, Node.js, MongoDB</li>
            <li>Responsive Design</li>
            <li>Authentication & Authorization</li>
          </ul>
        </div>
      ),
      image: "/cancer_clarity.png",
    },
    {
      title: "ICS",
      content: (
        <div className="">
          <p>
            An API integration project where we connected various third-party
            services to streamline business workflows.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>REST API, GraphQL</li>
            <li>Integration with Stripe, Twilio</li>
            <li>Microservices Architecture</li>
          </ul>
        </div>
      ),
      image: "/ics.png",
    },
    {
      title: "Revolution Cancer",
      content: (
        <div className="">
          <p>
            A mobile-first cloud engineering project aimed at deploying
            applications with high scalability and performance.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>AWS, GCP, Kubernetes</li>
            <li>Cloud-Native Architecture</li>
            <li>CI/CD Pipeline Setup</li>
          </ul>
        </div>
      ),
      image: "/revolution_cancer.png",
    },
    {
      title: "KNCT",
      content: (
        <div className="">
          <p>
            Led a project management effort to deliver a large-scale enterprise
            application on time and within budget.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Agile Methodologies</li>
            <li>Team Leadership</li>
            <li>Jira, Confluence, Trello</li>
          </ul>
        </div>
      ),
      image: "/knct.png",
    },
    {
      title: "KNCT",
      content: (
        <div className="">
          <p>
            Led a project management effort to deliver a large-scale enterprise
            application on time and within budget.
          </p>
          <ul className="list-disc ml-5 mt-2">
            <li>Agile Methodologies</li>
            <li>Team Leadership</li>
            <li>Jira, Confluence, Trello</li>
          </ul>
        </div>
      ),
      image: "/knct.png",
    },
  ];

  return (
    <div id="work" className="overflow-hidden">
      <Timeline data={projects} />
    </div>
  );
}
