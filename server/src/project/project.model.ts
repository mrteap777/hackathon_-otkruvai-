import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

// SkillsSprav Entity
@Entity('skills_sprav')
export class SkillsSprav {
  @PrimaryGeneratedColumn()
  skills_id: number;

  @Column({ nullable: false })
  skill_name: string;
}

// Company Entity
@Entity('company')
export class Company {
  @PrimaryGeneratedColumn()
  company_id: number;

  @Column({ nullable: false })
  company_name: string;

  @Column({ nullable: true })
  company_desc: string;

  @Column({ nullable: false, default: 0 })
  rating: number;

  @Column({ nullable: true })
  mail: string;
}

// Projects Entity
@Entity('project')
export class Projects {
  @PrimaryGeneratedColumn()
  project_id: number;

  @Column({ nullable: false })
  p_name: string;

  @Column({ nullable: true, default: 'без описания' })
  description: string;

  @ManyToOne(() => SkillsSprav, { nullable: true })
  @JoinColumn({ name: 'skills_id' })
  skills: SkillsSprav;

  @ManyToOne(() => Company, { nullable: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;
}
