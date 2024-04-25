
from sqlalchemy import create_engine, Column, String, Integer, Date, ForeignKey
from sqlalchemy.orm import sessionmaker, relationship
from sqlalchemy.orm import declarative_base


Base = declarative_base()


class SkillsSprav(Base):
    __tablename__ = 'skills_sprav'
    skills_id = Column(Integer, primary_key=True)
    skill_name = Column(String(50), nullable=False)




class Company(Base):
    __tablename__ = 'company'
    company_id = Column(Integer, primary_key=True)
    company_name = Column(String(255), nullable=False)
    company_desc = Column(String(255))
    rating = Column(Integer, default=0)
    mail = Column(String(255))




class Projects(Base):
    __tablename__ = 'project'
    project_id = Column(Integer, primary_key=True)
    p_name = Column(String(255), nullable=False)
    description = Column(String(1000), default='без описания')
    skills_id = Column(Integer, ForeignKey('skills_sprav.skills_id'))
    company_id = Column(Integer, ForeignKey('company.company_id'))
    
    skills = relationship(SkillsSprav)
    company_id = relationship(Company)


engine = create_engine('postgresql://postgres:12345@localhost/hackathon')
Base.metadata.create_all(engine)

