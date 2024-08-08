/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type __SubscriptionContainer = {
  onCreateDepartment: OnCreateDepartmentSubscription;
  onUpdateDepartment: OnUpdateDepartmentSubscription;
  onDeleteDepartment: OnDeleteDepartmentSubscription;
  onCreateEmployee: OnCreateEmployeeSubscription;
  onUpdateEmployee: OnUpdateEmployeeSubscription;
  onDeleteEmployee: OnDeleteEmployeeSubscription;
  onCreateProject: OnCreateProjectSubscription;
  onUpdateProject: OnUpdateProjectSubscription;
  onDeleteProject: OnDeleteProjectSubscription;
  onCreateEmployeeProjects: OnCreateEmployeeProjectsSubscription;
  onUpdateEmployeeProjects: OnUpdateEmployeeProjectsSubscription;
  onDeleteEmployeeProjects: OnDeleteEmployeeProjectsSubscription;
};

export type CreateDepartmentInput = {
  id?: string | null;
  departmentName: string;
  departmentManagerId?: string | null;
};

export type ModelDepartmentConditionInput = {
  departmentName?: ModelStringInput | null;
  and?: Array<ModelDepartmentConditionInput | null> | null;
  or?: Array<ModelDepartmentConditionInput | null> | null;
  not?: ModelDepartmentConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  departmentManagerId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type Department = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: Employee | null;
  employees?: ModelEmployeeConnection | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type Employee = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: Department | null;
  projects?: ModelEmployeeProjectsConnection | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type ModelEmployeeProjectsConnection = {
  __typename: "ModelEmployeeProjectsConnection";
  items: Array<EmployeeProjects | null>;
  nextToken?: string | null;
};

export type EmployeeProjects = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: Employee | null;
  project?: Project | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

export type Project = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: ModelEmployeeProjectsConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection";
  items: Array<Employee | null>;
  nextToken?: string | null;
};

export type UpdateDepartmentInput = {
  id: string;
  departmentName?: string | null;
  departmentManagerId?: string | null;
};

export type DeleteDepartmentInput = {
  id: string;
};

export type CreateEmployeeInput = {
  id?: string | null;
  employeeName: string;
  age: number;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
};

export type ModelEmployeeConditionInput = {
  employeeName?: ModelStringInput | null;
  age?: ModelIntInput | null;
  and?: Array<ModelEmployeeConditionInput | null> | null;
  or?: Array<ModelEmployeeConditionInput | null> | null;
  not?: ModelEmployeeConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  departmentEmployeesId?: ModelIDInput | null;
  employeeDepartmentId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateEmployeeInput = {
  id: string;
  employeeName?: string | null;
  age?: number | null;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
};

export type DeleteEmployeeInput = {
  id: string;
};

export type CreateProjectInput = {
  id?: string | null;
  projectName: string;
};

export type ModelProjectConditionInput = {
  projectName?: ModelStringInput | null;
  and?: Array<ModelProjectConditionInput | null> | null;
  or?: Array<ModelProjectConditionInput | null> | null;
  not?: ModelProjectConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  owner?: ModelStringInput | null;
};

export type UpdateProjectInput = {
  id: string;
  projectName?: string | null;
};

export type DeleteProjectInput = {
  id: string;
};

export type CreateEmployeeProjectsInput = {
  id?: string | null;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
};

export type ModelEmployeeProjectsConditionInput = {
  and?: Array<ModelEmployeeProjectsConditionInput | null> | null;
  or?: Array<ModelEmployeeProjectsConditionInput | null> | null;
  not?: ModelEmployeeProjectsConditionInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  employeeProjectsId?: ModelIDInput | null;
  projectEmployeesId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
};

export type UpdateEmployeeProjectsInput = {
  id: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
};

export type DeleteEmployeeProjectsInput = {
  id: string;
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null;
  departmentName?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelDepartmentFilterInput | null> | null;
  or?: Array<ModelDepartmentFilterInput | null> | null;
  not?: ModelDepartmentFilterInput | null;
  departmentManagerId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection";
  items: Array<Department | null>;
  nextToken?: string | null;
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null;
  employeeName?: ModelStringInput | null;
  age?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelEmployeeFilterInput | null> | null;
  or?: Array<ModelEmployeeFilterInput | null> | null;
  not?: ModelEmployeeFilterInput | null;
  departmentEmployeesId?: ModelIDInput | null;
  employeeDepartmentId?: ModelIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelProjectFilterInput = {
  id?: ModelIDInput | null;
  projectName?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  and?: Array<ModelProjectFilterInput | null> | null;
  or?: Array<ModelProjectFilterInput | null> | null;
  not?: ModelProjectFilterInput | null;
  owner?: ModelStringInput | null;
};

export type ModelProjectConnection = {
  __typename: "ModelProjectConnection";
  items: Array<Project | null>;
  nextToken?: string | null;
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  departmentName?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionDepartmentFilterInput | null> | null;
  or?: Array<ModelSubscriptionDepartmentFilterInput | null> | null;
  departmentEmployeesId?: ModelSubscriptionIDInput | null;
  departmentManagerId?: ModelSubscriptionIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  in?: Array<string | null> | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  employeeName?: ModelSubscriptionStringInput | null;
  age?: ModelSubscriptionIntInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  or?: Array<ModelSubscriptionEmployeeFilterInput | null> | null;
  employeeProjectsId?: ModelSubscriptionIDInput | null;
  employeeDepartmentId?: ModelSubscriptionIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  in?: Array<number | null> | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionProjectFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  projectName?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionProjectFilterInput | null> | null;
  or?: Array<ModelSubscriptionProjectFilterInput | null> | null;
  projectEmployeesId?: ModelSubscriptionIDInput | null;
  owner?: ModelStringInput | null;
};

export type ModelSubscriptionEmployeeProjectsFilterInput = {
  id?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionEmployeeProjectsFilterInput | null> | null;
  or?: Array<ModelSubscriptionEmployeeProjectsFilterInput | null> | null;
  owner?: ModelStringInput | null;
};

export type CreateDepartmentMutation = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type UpdateDepartmentMutation = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type DeleteDepartmentMutation = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type CreateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type UpdateEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type DeleteEmployeeMutation = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type CreateProjectMutation = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateProjectMutation = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type DeleteProjectMutation = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type CreateEmployeeProjectsMutation = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  project?: {
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

export type UpdateEmployeeProjectsMutation = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  project?: {
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

export type DeleteEmployeeProjectsMutation = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  project?: {
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

export type GetDepartmentQuery = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type ListDepartmentsQuery = {
  __typename: "ModelDepartmentConnection";
  items: Array<{
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetEmployeeQuery = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type ListEmployeesQuery = {
  __typename: "ModelEmployeeConnection";
  items: Array<{
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type GetProjectQuery = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ListProjectsQuery = {
  __typename: "ModelProjectConnection";
  items: Array<{
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null>;
  nextToken?: string | null;
};

export type OnCreateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type OnUpdateDepartmentSubscription = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type OnDeleteDepartmentSubscription = {
  __typename: "Department";
  id: string;
  departmentName: string;
  manager?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  employees?: {
    __typename: "ModelEmployeeConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentManagerId?: string | null;
  owner?: string | null;
};

export type OnCreateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type OnUpdateEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type OnDeleteEmployeeSubscription = {
  __typename: "Employee";
  id: string;
  employeeName: string;
  age: number;
  department?: {
    __typename: "Department";
    id: string;
    departmentName: string;
    createdAt: string;
    updatedAt: string;
    departmentManagerId?: string | null;
    owner?: string | null;
  } | null;
  projects?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  departmentEmployeesId?: string | null;
  employeeDepartmentId?: string | null;
  owner?: string | null;
};

export type OnCreateProjectSubscription = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnUpdateProjectSubscription = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnDeleteProjectSubscription = {
  __typename: "Project";
  id: string;
  projectName: string;
  employees?: {
    __typename: "ModelEmployeeProjectsConnection";
    nextToken?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type OnCreateEmployeeProjectsSubscription = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  project?: {
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

export type OnUpdateEmployeeProjectsSubscription = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  project?: {
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

export type OnDeleteEmployeeProjectsSubscription = {
  __typename: "EmployeeProjects";
  id: string;
  employee?: {
    __typename: "Employee";
    id: string;
    employeeName: string;
    age: number;
    createdAt: string;
    updatedAt: string;
    departmentEmployeesId?: string | null;
    employeeDepartmentId?: string | null;
    owner?: string | null;
  } | null;
  project?: {
    __typename: "Project";
    id: string;
    projectName: string;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
  employeeProjectsId?: string | null;
  projectEmployeesId?: string | null;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateDepartment(
    input: CreateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<CreateDepartmentMutation> {
    const statement = `mutation CreateDepartment($input: CreateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        createDepartment(input: $input, condition: $condition) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateDepartmentMutation>response.data.createDepartment;
  }
  async UpdateDepartment(
    input: UpdateDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<UpdateDepartmentMutation> {
    const statement = `mutation UpdateDepartment($input: UpdateDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        updateDepartment(input: $input, condition: $condition) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateDepartmentMutation>response.data.updateDepartment;
  }
  async DeleteDepartment(
    input: DeleteDepartmentInput,
    condition?: ModelDepartmentConditionInput
  ): Promise<DeleteDepartmentMutation> {
    const statement = `mutation DeleteDepartment($input: DeleteDepartmentInput!, $condition: ModelDepartmentConditionInput) {
        deleteDepartment(input: $input, condition: $condition) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteDepartmentMutation>response.data.deleteDepartment;
  }
  async CreateEmployee(
    input: CreateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<CreateEmployeeMutation> {
    const statement = `mutation CreateEmployee($input: CreateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        createEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeMutation>response.data.createEmployee;
  }
  async UpdateEmployee(
    input: UpdateEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<UpdateEmployeeMutation> {
    const statement = `mutation UpdateEmployee($input: UpdateEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        updateEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeMutation>response.data.updateEmployee;
  }
  async DeleteEmployee(
    input: DeleteEmployeeInput,
    condition?: ModelEmployeeConditionInput
  ): Promise<DeleteEmployeeMutation> {
    const statement = `mutation DeleteEmployee($input: DeleteEmployeeInput!, $condition: ModelEmployeeConditionInput) {
        deleteEmployee(input: $input, condition: $condition) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeMutation>response.data.deleteEmployee;
  }
  async CreateProject(
    input: CreateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<CreateProjectMutation> {
    const statement = `mutation CreateProject($input: CreateProjectInput!, $condition: ModelProjectConditionInput) {
        createProject(input: $input, condition: $condition) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateProjectMutation>response.data.createProject;
  }
  async UpdateProject(
    input: UpdateProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<UpdateProjectMutation> {
    const statement = `mutation UpdateProject($input: UpdateProjectInput!, $condition: ModelProjectConditionInput) {
        updateProject(input: $input, condition: $condition) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateProjectMutation>response.data.updateProject;
  }
  async DeleteProject(
    input: DeleteProjectInput,
    condition?: ModelProjectConditionInput
  ): Promise<DeleteProjectMutation> {
    const statement = `mutation DeleteProject($input: DeleteProjectInput!, $condition: ModelProjectConditionInput) {
        deleteProject(input: $input, condition: $condition) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteProjectMutation>response.data.deleteProject;
  }
  async CreateEmployeeProjects(
    input: CreateEmployeeProjectsInput,
    condition?: ModelEmployeeProjectsConditionInput
  ): Promise<CreateEmployeeProjectsMutation> {
    const statement = `mutation CreateEmployeeProjects($input: CreateEmployeeProjectsInput!, $condition: ModelEmployeeProjectsConditionInput) {
        createEmployeeProjects(input: $input, condition: $condition) {
          __typename
          id
          employee {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          project {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          employeeProjectsId
          projectEmployeesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateEmployeeProjectsMutation>response.data.createEmployeeProjects;
  }
  async UpdateEmployeeProjects(
    input: UpdateEmployeeProjectsInput,
    condition?: ModelEmployeeProjectsConditionInput
  ): Promise<UpdateEmployeeProjectsMutation> {
    const statement = `mutation UpdateEmployeeProjects($input: UpdateEmployeeProjectsInput!, $condition: ModelEmployeeProjectsConditionInput) {
        updateEmployeeProjects(input: $input, condition: $condition) {
          __typename
          id
          employee {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          project {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          employeeProjectsId
          projectEmployeesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateEmployeeProjectsMutation>response.data.updateEmployeeProjects;
  }
  async DeleteEmployeeProjects(
    input: DeleteEmployeeProjectsInput,
    condition?: ModelEmployeeProjectsConditionInput
  ): Promise<DeleteEmployeeProjectsMutation> {
    const statement = `mutation DeleteEmployeeProjects($input: DeleteEmployeeProjectsInput!, $condition: ModelEmployeeProjectsConditionInput) {
        deleteEmployeeProjects(input: $input, condition: $condition) {
          __typename
          id
          employee {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          project {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          employeeProjectsId
          projectEmployeesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteEmployeeProjectsMutation>response.data.deleteEmployeeProjects;
  }
  async GetDepartment(id: string): Promise<GetDepartmentQuery> {
    const statement = `query GetDepartment($id: ID!) {
        getDepartment(id: $id) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetDepartmentQuery>response.data.getDepartment;
  }
  async ListDepartments(
    filter?: ModelDepartmentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListDepartmentsQuery> {
    const statement = `query ListDepartments($filter: ModelDepartmentFilterInput, $limit: Int, $nextToken: String) {
        listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListDepartmentsQuery>response.data.listDepartments;
  }
  async GetEmployee(id: string): Promise<GetEmployeeQuery> {
    const statement = `query GetEmployee($id: ID!) {
        getEmployee(id: $id) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetEmployeeQuery>response.data.getEmployee;
  }
  async ListEmployees(
    filter?: ModelEmployeeFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListEmployeesQuery> {
    const statement = `query ListEmployees($filter: ModelEmployeeFilterInput, $limit: Int, $nextToken: String) {
        listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListEmployeesQuery>response.data.listEmployees;
  }
  async GetProject(id: string): Promise<GetProjectQuery> {
    const statement = `query GetProject($id: ID!) {
        getProject(id: $id) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetProjectQuery>response.data.getProject;
  }
  async ListProjects(
    filter?: ModelProjectFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListProjectsQuery> {
    const statement = `query ListProjects($filter: ModelProjectFilterInput, $limit: Int, $nextToken: String) {
        listProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListProjectsQuery>response.data.listProjects;
  }
  OnCreateDepartmentListener(
    filter?: ModelSubscriptionDepartmentFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
  > {
    const statement = `subscription OnCreateDepartment($filter: ModelSubscriptionDepartmentFilterInput, $owner: String) {
        onCreateDepartment(filter: $filter, owner: $owner) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateDepartment">>
    >;
  }

  OnUpdateDepartmentListener(
    filter?: ModelSubscriptionDepartmentFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
  > {
    const statement = `subscription OnUpdateDepartment($filter: ModelSubscriptionDepartmentFilterInput, $owner: String) {
        onUpdateDepartment(filter: $filter, owner: $owner) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateDepartment">>
    >;
  }

  OnDeleteDepartmentListener(
    filter?: ModelSubscriptionDepartmentFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
  > {
    const statement = `subscription OnDeleteDepartment($filter: ModelSubscriptionDepartmentFilterInput, $owner: String) {
        onDeleteDepartment(filter: $filter, owner: $owner) {
          __typename
          id
          departmentName
          manager {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentManagerId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteDepartment">>
    >;
  }

  OnCreateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
  > {
    const statement = `subscription OnCreateEmployee($filter: ModelSubscriptionEmployeeFilterInput, $owner: String) {
        onCreateEmployee(filter: $filter, owner: $owner) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateEmployee">>
    >;
  }

  OnUpdateEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
  > {
    const statement = `subscription OnUpdateEmployee($filter: ModelSubscriptionEmployeeFilterInput, $owner: String) {
        onUpdateEmployee(filter: $filter, owner: $owner) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateEmployee">>
    >;
  }

  OnDeleteEmployeeListener(
    filter?: ModelSubscriptionEmployeeFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
  > {
    const statement = `subscription OnDeleteEmployee($filter: ModelSubscriptionEmployeeFilterInput, $owner: String) {
        onDeleteEmployee(filter: $filter, owner: $owner) {
          __typename
          id
          employeeName
          age
          department {
            __typename
            id
            departmentName
            createdAt
            updatedAt
            departmentManagerId
            owner
          }
          projects {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          departmentEmployeesId
          employeeDepartmentId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteEmployee">>
    >;
  }

  OnCreateProjectListener(
    filter?: ModelSubscriptionProjectFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProject">>
  > {
    const statement = `subscription OnCreateProject($filter: ModelSubscriptionProjectFilterInput, $owner: String) {
        onCreateProject(filter: $filter, owner: $owner) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onCreateProject">>
    >;
  }

  OnUpdateProjectListener(
    filter?: ModelSubscriptionProjectFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProject">>
  > {
    const statement = `subscription OnUpdateProject($filter: ModelSubscriptionProjectFilterInput, $owner: String) {
        onUpdateProject(filter: $filter, owner: $owner) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onUpdateProject">>
    >;
  }

  OnDeleteProjectListener(
    filter?: ModelSubscriptionProjectFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProject">>
  > {
    const statement = `subscription OnDeleteProject($filter: ModelSubscriptionProjectFilterInput, $owner: String) {
        onDeleteProject(filter: $filter, owner: $owner) {
          __typename
          id
          projectName
          employees {
            __typename
            nextToken
          }
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<Pick<__SubscriptionContainer, "onDeleteProject">>
    >;
  }

  OnCreateEmployeeProjectsListener(
    filter?: ModelSubscriptionEmployeeProjectsFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onCreateEmployeeProjects">
    >
  > {
    const statement = `subscription OnCreateEmployeeProjects($filter: ModelSubscriptionEmployeeProjectsFilterInput, $owner: String) {
        onCreateEmployeeProjects(filter: $filter, owner: $owner) {
          __typename
          id
          employee {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          project {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          employeeProjectsId
          projectEmployeesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onCreateEmployeeProjects">
      >
    >;
  }

  OnUpdateEmployeeProjectsListener(
    filter?: ModelSubscriptionEmployeeProjectsFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onUpdateEmployeeProjects">
    >
  > {
    const statement = `subscription OnUpdateEmployeeProjects($filter: ModelSubscriptionEmployeeProjectsFilterInput, $owner: String) {
        onUpdateEmployeeProjects(filter: $filter, owner: $owner) {
          __typename
          id
          employee {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          project {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          employeeProjectsId
          projectEmployeesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onUpdateEmployeeProjects">
      >
    >;
  }

  OnDeleteEmployeeProjectsListener(
    filter?: ModelSubscriptionEmployeeProjectsFilterInput,
    owner?: string
  ): Observable<
    SubscriptionResponse<
      Pick<__SubscriptionContainer, "onDeleteEmployeeProjects">
    >
  > {
    const statement = `subscription OnDeleteEmployeeProjects($filter: ModelSubscriptionEmployeeProjectsFilterInput, $owner: String) {
        onDeleteEmployeeProjects(filter: $filter, owner: $owner) {
          __typename
          id
          employee {
            __typename
            id
            employeeName
            age
            createdAt
            updatedAt
            departmentEmployeesId
            employeeDepartmentId
            owner
          }
          project {
            __typename
            id
            projectName
            createdAt
            updatedAt
            owner
          }
          createdAt
          updatedAt
          employeeProjectsId
          projectEmployeesId
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (owner) {
      gqlAPIServiceArguments.owner = owner;
    }
    return API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    ) as Observable<
      SubscriptionResponse<
        Pick<__SubscriptionContainer, "onDeleteEmployeeProjects">
      >
    >;
  }
}
