import { GetStaticProps } from "next";
import React, { useState } from "react";
import Layout from "../Component/Layout";

export const getStaticProps: GetStaticProps = async (context) => {
  // featch api data function
  async function getTerms() {
    const res = await fetch(
      "https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard"
    );
    return await res.json();
  }

  const { data } = await getTerms();

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

interface HomeProps {
  data: [
    {
      id: number;
      keyword: string;
      goal: string;
      matches: number;
      search_status: string;
    }
  ];
}

export default function Home({ data }: HomeProps) {
  const [terms, setTerms] = useState<Object[]>(data);

  // remove term form array
  const removeTerm = (id: number) => {
    const newTerms = terms.filter((term: any) => term.id !== id);
    setTerms(newTerms);
  };

  return (
    <Layout>
      <main className="spacer-lg-y">
        {/* #1 */}
        <div className="content-container spacer-y">
          <div className="d-flex justify-between">
            <div className="d-flex gap-4 items-center">
              <h3>Add Another keyword</h3>
              <div>
                <span className="badge">1/3</span>
              </div>
              <a href="#" className="link text-lead">
                UPGRADE
              </a>
            </div>
            <div className="">
              <a href="#" className="link text-lead">
                Advance search
              </a>
            </div>
          </div>
          {/* search form */}
          <form action="#" className="customized-form-2">
            <div className="d-flex gap-4 items-center">
              <i className="fa fa-search" aria-hidden="true"></i>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your filters here"
              />
            </div>
            <button className="btn btn-primary btn-lg text-capitalized">
              Save Filters
            </button>
          </form>
        </div>
        {/* #2 */}
        <div className="content-container spacer-y">
          <div className="d-flex justify-between">
            <h3 className="">The terms you are tracking</h3>
            <p className="text-lead">The data will refresh every 5 min</p>
          </div>
          <table className="text-center">
            <thead>
              <tr>
                <td>Keywords</td>
                <td></td>
                <td>Goal</td>
                <td>Matches</td>
                <td>Search Status</td>
                <td>Delete keyword</td>
              </tr>
            </thead>
            <tbody>
              {/* Start loop and show data */}
              {terms &&
                terms.map((term: any) => (
                  <tr key={term.id}>
                    <td>{term.keyword}</td>
                    <td>
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </td>
                    <td>{term.goal}</td>
                    <td>{term.matches}</td>
                    <td>{term.search_status}</td>
                    <td>
                      <button
                        className="icon-btn"
                        onClick={(e) => {
                          removeTerm(term.id);
                        }}
                      >
                        <i
                          className="fas fa-trash fa-lg"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <br />
          <div className="d-flex justify-center">
            <button className="btn btn-primary text-capitalized">
              view results
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
