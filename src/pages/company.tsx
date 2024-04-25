// pages/companies.tsx

import { useEffect, useState } from 'react';
import React from 'react';
import CompanyList from '../components/CompanyList'; // Предполагается, что компонент находится в этом месте
import { ICompany } from '@/types/project'; // Предполагается, что у вас есть определение типа ICompany
import axios from 'axios';
import classes from "../Styles/components/companymain.module.scss"
import router from 'next/router';
import UIButton from '@/components/UIButton';

// Предположим, что у вас есть список компаний, который вы хотите отобразить
const CompaniesPage =()=>{
const [company ,setCompany] = useState<ICompany[]>([]);
useEffect(() => {
    axios.get("http://localhost:5000/company")
    .then(response => setCompany(response.data))
    .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className={classes["Main"]}>
        <header className={classes["Main__Header"]}>
                <img onClick={() => router.push("/")} src="/images/Full_coat_of_arms_of_Primorsky_Krai.svg" alt="" />
                
                <UIButton onClick={() => router.push("/")} type="string" children='Витрина проектов'/>
                <UIButton onClick={() => router.push("/company")} type="string" children='Компании'/>
                <UIButton onClick={() => router.push("/")} type="string" children='Инвесторам'/>
        </header>
        <div>
            <h1 className={classes["h1"]}>Список компаний</h1>
            <CompanyList companies={company} />
        </div>
        
    </div>
  );

}
export default CompaniesPage;
