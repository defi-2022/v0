/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ChainlinkClient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkClient__factory>;
    getContractFactory(
      name: "ConfirmedOwner",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwner__factory>;
    getContractFactory(
      name: "ConfirmedOwnerWithProposal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ConfirmedOwnerWithProposal__factory>;
    getContractFactory(
      name: "ChainlinkRequestInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ChainlinkRequestInterface__factory>;
    getContractFactory(
      name: "ENSInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ENSInterface__factory>;
    getContractFactory(
      name: "LinkTokenInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LinkTokenInterface__factory>;
    getContractFactory(
      name: "OperatorInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OperatorInterface__factory>;
    getContractFactory(
      name: "OracleInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OracleInterface__factory>;
    getContractFactory(
      name: "OwnableInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableInterface__factory>;
    getContractFactory(
      name: "PointerInterface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PointerInterface__factory>;
    getContractFactory(
      name: "ENSResolver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ENSResolver__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Burnable__factory>;
    getContractFactory(
      name: "ERC1155Supply",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Supply__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IOracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IOracle__factory>;
    getContractFactory(
      name: "Market",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Market__factory>;
    getContractFactory(
      name: "MarketFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MarketFactory__factory>;
    getContractFactory(
      name: "Oracle",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Oracle__factory>;
    getContractFactory(
      name: "Token20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token20__factory>;

    getContractAt(
      name: "ChainlinkClient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkClient>;
    getContractAt(
      name: "ConfirmedOwner",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwner>;
    getContractAt(
      name: "ConfirmedOwnerWithProposal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ConfirmedOwnerWithProposal>;
    getContractAt(
      name: "ChainlinkRequestInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ChainlinkRequestInterface>;
    getContractAt(
      name: "ENSInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ENSInterface>;
    getContractAt(
      name: "LinkTokenInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LinkTokenInterface>;
    getContractAt(
      name: "OperatorInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OperatorInterface>;
    getContractAt(
      name: "OracleInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OracleInterface>;
    getContractAt(
      name: "OwnableInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableInterface>;
    getContractAt(
      name: "PointerInterface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PointerInterface>;
    getContractAt(
      name: "ENSResolver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ENSResolver>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Burnable>;
    getContractAt(
      name: "ERC1155Supply",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Supply>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IOracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IOracle>;
    getContractAt(
      name: "Market",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Market>;
    getContractAt(
      name: "MarketFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MarketFactory>;
    getContractAt(
      name: "Oracle",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Oracle>;
    getContractAt(
      name: "Token20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token20>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
