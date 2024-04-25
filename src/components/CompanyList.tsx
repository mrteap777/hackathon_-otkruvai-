import React from 'react';
import CompanyCard from './CompanyCard';
import { ICompany } from '@/types/project';
import styles from "../styles/components/companylist.module.scss";

interface ICompanyList {
  companies: ICompany[];
}

const CompanyList: React.FC<ICompanyList> = ({ companies }) => {
  return (
    <div className={styles.Main__Projects}>
      {companies.map((company) => (
        <CompanyCard key={company.company_id}company={company} />
      ))}
    </div>
  );
};

export default CompanyList;
