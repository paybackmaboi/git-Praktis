import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Violation } from './violation.entity';

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true })
    studentId!: string; // Unique student identifier

    @Column({ unique: true })
    email!: string;

    @Column()
    password!: string; 

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    course!: string;

    @Column({ type: 'int' }) // Ensure proper SQL type
    yearLevel!: number;
    
    @OneToMany(() => Violation, (violation) => violation.student, { cascade: ['insert', 'update'], onDelete: 'CASCADE' })
    violations!: Violation[];

    @Column()
    role!: string;  // Example: "admin", "teacher", "staff"
}